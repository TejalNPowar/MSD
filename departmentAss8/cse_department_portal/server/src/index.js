import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import Database from 'better-sqlite3'
import path from 'path'
import {fileURLToPath} from 'url'
const __dirname=path.dirname(fileURLToPath(import.meta.url))
const db=new Database(path.join(__dirname,'../data/cse.db'))
db.pragma('journal_mode = WAL')
const app=express();app.use(cors());app.use(express.json())
const SECRET=process.env.JWT_SECRET||'cse-development-secret'

db.exec(`
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,password TEXT,role TEXT);
CREATE TABLE IF NOT EXISTS faculty(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,name TEXT,designation TEXT,qualification TEXT,specialization TEXT);
CREATE TABLE IF NOT EXISTS notices(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEXT,category TEXT,created_by INTEGER,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEXT,date TEXT,venue TEXT,organizer TEXT);
CREATE TABLE IF NOT EXISTS event_registrations(id INTEGER PRIMARY KEY AUTOINCREMENT,event_id INTEGER,student_id INTEGER,registered_at TEXT DEFAULT CURRENT_TIMESTAMP, UNIQUE(event_id,student_id));
CREATE TABLE IF NOT EXISTS courses(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,code TEXT,semester INTEGER,credits INTEGER);
CREATE TABLE IF NOT EXISTS projects(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEXT,guide TEXT,year INTEGER,github_url TEXT);
CREATE TABLE IF NOT EXISTS achievements(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEXT,category TEXT,date TEXT);
`)
if(db.prepare('SELECT COUNT(*) c FROM users').get().c===0){
 const ins=db.prepare('INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)')
 ins.run('System Admin','admin@cse.edu','admin123','admin');ins.run('Dr. Ananya Rao','faculty@cse.edu','faculty123','faculty');ins.run('Aarav Sharma','student@cse.edu','student123','student')
 db.prepare('INSERT INTO faculty(user_id,name,designation,qualification,specialization) VALUES(?,?,?,?,?)').run(2,'Dr. Ananya Rao','Professor & HOD','Ph.D., M.Tech','Artificial Intelligence')
 const notice=db.prepare('INSERT INTO notices(title,description,category) VALUES(?,?,?)')
 notice.run('Mid-Semester Examination Schedule Released','The examination schedule has been published. Students are requested to check the academic portal.','ACADEMICS')
 notice.run('CSE Hackathon 2026 Registrations Open','Build, collaborate and compete in our annual department hackathon.','EVENT')
 notice.run('New AI Research Lab Inaugurated','The department has opened a new lab focused on applied AI research.','RESEARCH')
 const ev=db.prepare('INSERT INTO events(title,description,date,venue,organizer) VALUES(?,?,?,?,?)')
 ev.run('CSE Hackathon 2026','24 hours. Real problems. Real prototypes.','2026-09-25T09:00:00','Innovation Lab','CSE Department')
 ev.run('Industry Talk: AI in Production','An interactive session with an industry engineering leader.','2026-10-03T14:00:00','Seminar Hall','CSE Association')
 ev.run('Alumni Connect 2026','Meet alumni and learn about careers in technology.','2026-10-17T11:00:00','Main Auditorium','Alumni Cell')
 const course=db.prepare('INSERT INTO courses(name,code,semester,credits) VALUES(?,?,?,?)')
 ;[['Data Structures','CS201',3,4],['Database Management Systems','CS202',3,4],['Operating Systems','CS301',5,4],['Computer Networks','CS302',5,4],['Machine Learning','CS401',7,4],['Cloud Computing','CS402',7,3]].forEach(x=>course.run(...x))
 const proj=db.prepare('INSERT INTO projects(title,description,guide,year,github_url) VALUES(?,?,?,?,?)')
 proj.run('Smart Campus Assistant','An AI-powered assistant for navigating campus services and FAQs.','Dr. Ananya Rao',2026,'https://github.com/')
 proj.run('Placement Analytics Dashboard','Interactive analytics for placement trends, recruiters and student outcomes.','Prof. R. Mehta',2026,'https://github.com/')
 proj.run('Secure File Exchange','Encrypted peer-to-peer file sharing prototype for academic teams.','Dr. K. Joshi',2025,'https://github.com/')
 const ach=db.prepare('INSERT INTO achievements(title,description,category,date) VALUES(?,?,?,?)')
 ach.run('National Hackathon Winners','CSE team won first place for an accessibility-focused solution.','HACKATHON','2026')
 ach.run('Best Research Poster','Outstanding undergraduate research poster at the university symposium.','RESEARCH','2026')
 ach.run('Open Source Recognition','Students contributed significant fixes to a major open-source project.','OPEN SOURCE','2025')
}
function auth(req,res,next){try{const h=req.headers.authorization||'';req.user=jwt.verify(h.replace('Bearer ',''),SECRET);next()}catch{res.status(401).json({error:'Authentication required'})}}
function admin(req,res,next){if(!['admin','faculty'].includes(req.user.role))return res.status(403).json({error:'Insufficient permissions'});next()}
app.post('/api/auth/login',(req,res)=>{const u=db.prepare('SELECT id,name,email,role,password FROM users WHERE email=?').get(req.body.email);if(!u||u.password!==req.body.password)return res.status(401).json({error:'Invalid email or password'});const token=jwt.sign({id:u.id,name:u.name,email:u.email,role:u.role},SECRET,{expiresIn:'8h'});res.json({token,user:{id:u.id,name:u.name,email:u.email,role:u.role}})})
app.get('/api/notices',(req,res)=>res.json(db.prepare('SELECT * FROM notices ORDER BY created_at DESC').all()))
app.post('/api/notices',auth,admin,(req,res)=>{const r=db.prepare('INSERT INTO notices(title,description,category,created_by) VALUES(?,?,?,?)').run(req.body.title,req.body.description||'',req.body.category||'GENERAL',req.user.id);res.json({id:r.lastInsertRowid})})
app.delete('/api/notices/:id',auth,admin,(req,res)=>{db.prepare('DELETE FROM notices WHERE id=?').run(req.params.id);res.json({ok:true})})
app.get('/api/events',(req,res)=>res.json(db.prepare('SELECT * FROM events ORDER BY date').all()))
app.post('/api/events/:id/register',auth,(req,res)=>{try{db.prepare('INSERT INTO event_registrations(event_id,student_id) VALUES(?,?)').run(req.params.id,req.user.id);res.json({ok:true})}catch{res.status(400).json({error:'Already registered or registration unavailable'})}})
app.get('/api/faculty',(req,res)=>res.json(db.prepare('SELECT * FROM faculty').all()))
app.get('/api/courses',(req,res)=>res.json(db.prepare('SELECT * FROM courses ORDER BY semester,id').all()))
app.get('/api/projects',(req,res)=>res.json(db.prepare('SELECT * FROM projects ORDER BY year DESC,id DESC').all()))
app.get('/api/achievements',(req,res)=>res.json(db.prepare('SELECT * FROM achievements ORDER BY date DESC,id DESC').all()))
app.get('/api/health',(req,res)=>res.json({status:'ok'}))
app.use(express.static(path.join(__dirname,'../../client/dist')))
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'../../client/dist/index.html')))
app.listen(5000,()=>console.log('CSE portal API running on http://localhost:5000'))
