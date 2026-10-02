import type { ExperienceCopy } from "./types";

const th: ExperienceCopy = {
  introduction: [
    "ผม คัมภีรภพณ์ ธงแสง (ภพ) นักศึกษาสาขาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล มหาวิทยาลัยนอร์ทกรุงเทพ ฝึกงานตำแหน่ง Full Stack Developer ที่ Blueseas Enterprise Co., Ltd.",
    "ระหว่างฝึกงาน ผมมีส่วนร่วมใน 13 โปรเจกต์ ตั้งแต่ PoC สำหรับนำเสนอแนวคิดให้ทีมและลูกค้า ไปจนถึงระบบที่เปิดใช้งานจริง ระบบภายในองค์กร และ Microservice ที่หลายแอปพลิเคชันเรียกใช้ งานส่วนใหญ่ครอบคลุมทั้ง Frontend และ Backend",
    "ประสบการณ์ของผมครอบคลุมตัวสร้างแบบฟอร์ม Dynamic การเดินเอกสาร แฟ้มสะสมผลงาน อีเวนต์คอนเสิร์ต การจองรถ คะแนนและของรางวัล ครุภัณฑ์ และงานซ่อมบำรุง ได้ทำงานเป็น Sprint ร่วมกับทีม รวมถึงทดสอบกระบวนการใช้งานตั้งแต่ต้นจนจบ บันทึกเคสบั๊ก และแก้ไขข้อผิดพลาดของระบบ",
  ],
  internshipSummary:
    "พัฒนาเว็บแอปพลิเคชันร่วมกับทีมด้วย React, TypeScript และ MUI เชื่อมหน้าจอกับ Backend ที่พัฒนาด้วย Node.js ทำงานกับ MongoDB และออกแบบฐานข้อมูล PostgreSQL ในระบบคะแนนสะสม รวมถึงเชื่อม Microservice, LINE และระบบแจ้งเตือนตามขอบเขตของแต่ละโปรเจกต์",
  internshipHighlights: [
    "สร้าง PoC เพื่อสาธิตแนวคิดให้ทีมและลูกค้า เช่น ตัวสร้างแบบฟอร์ม Dynamic สำหรับนำเสนอภายในทีม และต้นแบบการนำเข้าข้อมูลสำหรับนำเสนอลูกค้า",
    "พัฒนา Frontend และ Backend ของระบบใช้งานจริง ได้แก่ NSM E-Portfolio, Siriraj Event และ Siriraj Give Phase 2 ร่วมกับทีม พร้อมแก้บั๊กมากกว่า 100 เคสในแต่ละโปรเจกต์ Siriraj Event และ Siriraj Give Phase 2",
    "ออกแบบฐานข้อมูล PostgreSQL และพัฒนา Stored Procedure และ Function สำหรับ Points & Rewards Service พร้อมระบบแต้ม การแลกรางวัล และการยืนยันตัวตนของแอปที่เชื่อมต่อ",
    "พัฒนา Flow ผ่าน LINE LIFF และ Rich Menu เชื่อมแบบสอบถามกับระบบคะแนน ใช้ Redis ในการตัดแต้มและตัดสต๊อก และพัฒนา Cron Job กับการแจ้งเตือนผ่าน LINE Messaging API",
    "ทดสอบ NSM E-Portfolio แบบ Full loop ก่อนส่งมอบงาน และทดสอบระบบจองรถในช่วง QA และ UAT พร้อมบันทึกเคสบั๊กและแก้ไขข้อผิดพลาด",
    "พัฒนา OCR & Search ตั้งแต่อัปโหลดเอกสาร ประมวลผลด้วย Python และ Tesseract ไปจนถึงค้นหาผ่าน Elasticsearch แบบ Fuzzy Match พร้อมไฮไลต์คำทั้งไทยและอังกฤษ",
  ],
  scopeTitle: "งานที่ผมรับผิดชอบ",
  scopeIntroduction:
    "งานที่รับผิดชอบครอบคลุมหน้าจอ Backend ฐานข้อมูล การเชื่อมบริการ การทดสอบ และการทำงานร่วมกับทีม โดยแต่ละโปรเจกต์มีขอบเขตต่างกัน เช่น พัฒนา OCR & Search ร่วมพัฒนาระบบใช้งานจริง และพัฒนาบางส่วนของ StepNode กับ Metadata ใน Document Workflow",
  relatedWork: "ผลงานที่เกี่ยวข้อง",
  responsibilities: {
    frontend: {
      title: "พัฒนาหน้าจอและส่วนติดต่อผู้ใช้",
      description:
        "พัฒนาหน้าจอผู้ใช้งานและผู้ดูแลระบบด้วย React, TypeScript และ MUI ทำ UI ตาม Figma ใน NSM E-Portfolio และปรับ Responsive ใน Siriraj Give Phase 2 พัฒนาตัวสร้างแบบฟอร์ม A4 ด้วย Drag & Drop และแผง Property รวมถึงหน้าคิวจองบัตรผ่าน Socket การเลือกโซนและคำนวณราคาใน Siriraj Event ตลอดจนฟอร์มแลกรางวัลและ UI ชำระเงินใน Siriraj Give Phase 2",
    },
    backend: {
      title: "พัฒนา Backend และจัดการข้อมูล",
      description:
        "พัฒนา Backend ด้วย Node.js และ TypeScript เชื่อมหน้าจอกับข้อมูลของระบบ ทำงานกับ MongoDB และรับผิดชอบฐานข้อมูลใน Form Builder Prototype ออกแบบฐานข้อมูล PostgreSQL พร้อม Stored Procedure และ Function ใน Points & Rewards Service รองรับการสะสม หัก คืน และแลกคะแนน รวมถึงงานนำเข้าข้อมูล ส่งออก Excel และสร้าง PDF ขนาด A4",
    },
    services: {
      title: "พัฒนาและเชื่อม Microservice",
      description:
        "พัฒนาและเชื่อมบริการสำหรับแบบฟอร์ม คะแนน และข้อมูลครุภัณฑ์ ทำการยืนยันตัวตนผ่าน Basic Auth, Key และ Token ใน Points & Rewards Service และพัฒนา Token สำหรับ Asset Management Service มีส่วนร่วมจัดวางและทดสอบ Flow รวมถึงพัฒนาบางส่วนของ StepNode และ Metadata ใน Document Workflow และพัฒนา Playground สำหรับทดลองใช้งานและตัดสต๊อกในระบบครุภัณฑ์",
    },
    integrations: {
      title: "LINE, Notification และงานตามกำหนดเวลา",
      description:
        "เชื่อม LINE LIFF, Rich Menu และ QR Code ใน Healthcare Engagement พร้อม Flow แบบสอบถาม รับคะแนน และแลกรางวัล ใช้ Redis ในกระบวนการตัดคะแนนและตัดสต๊อก พัฒนา Cron Job และเชื่อม LINE Messaging API รวมถึง Notification Service ในระบบจองรถและ Maintenance Management โดยรับผิดชอบ Email Template ทั้งหมดของ Maintenance Management",
    },
    workflows: {
      title: "กระบวนการทำงานและสิทธิ์ผู้ใช้งาน",
      description:
        "พัฒนาฟอร์มขอใช้รถ แบบประเมิน รายงาน และปฏิทินการเดินทาง พร้อม Role และ Permission และมีส่วนร่วมในระบบจัดสรรรถอัตโนมัติ พัฒนา Flow แจ้งซ่อมตั้งแต่ช่างรับงานจนปิดเคส การเบิกอะไหล่ และแผนบำรุงรักษาใน Maintenance Management รวมถึงข้อมูลครุภัณฑ์ วัสดุ และรูปแบบเลขครุภัณฑ์ โดยมีความเข้าใจบริบทปีงบประมาณและปีปฏิทิน",
    },
    search: {
      title: "ประมวลผลเอกสารและค้นหาข้อความ",
      description:
        "พัฒนา Frontend และ Backend ของ OCR & Search เชื่อมหน้าอัปโหลดกับ Python และ Tesseract OCR จัดเก็บและจัดทำดัชนีข้อความใน Elasticsearch พัฒนา Keyword Search และ Fuzzy Match ทั้งไทยและอังกฤษ พร้อมไฮไลต์ข้อความและระบุเอกสารที่พบในผลลัพธ์",
    },
    production: {
      title: "ทดสอบระบบและแก้ไขข้อผิดพลาด",
      description:
        "ทดสอบ NSM E-Portfolio แบบ Full loop ก่อนส่งมอบงาน และทดสอบระบบจองรถตั้งแต่ต้นจนจบในช่วง QA และ UAT พร้อมบันทึกเคสบั๊กและแก้ไขข้อผิดพลาด ทดสอบและแก้เคสใน Maintenance Management รวมถึงมีส่วนร่วมแก้บั๊กมากกว่า 100 เคสใน Siriraj Event และอีกมากกว่า 100 เคสใน Siriraj Give Phase 2",
    },
    collaboration: {
      title: "ทำงานเป็น Sprint และทดลอง Deploy",
      description:
        "ทำงานเป็น Sprint ร่วมกับทีมในระบบจองรถและ Maintenance Management เข้าร่วม Sprint Planning และ Sprint Review และพัฒนางานจาก Backlog ที่ได้รับในระบบจองรถ ได้ทดลอง Deploy Healthcare Engagement ขึ้น QA และ Staging โดยใช้ Harbor และ Termius เพื่อเตรียมระบบสำหรับการทดสอบ",
    },
  },
  toolsIntroduction:
    "เครื่องมือที่ได้ใช้ตามขอบเขตของแต่ละโปรเจกต์ เช่น PostgreSQL ใน Points & Rewards Service, Redis และ LINE ใน Healthcare Engagement, Socket ใน Siriraj Event และ Python, Tesseract กับ Elasticsearch ใน OCR & Search",
  toolGroups: {
    frontend: "ส่วนติดต่อผู้ใช้",
    backend: "ระบบเบื้องหลังและฐานข้อมูล",
    delivery: "เครื่องมือในกระบวนการพัฒนาของทีม",
    processing: "ประมวลผลเอกสารและข้อความ",
  },
};
export default th;
