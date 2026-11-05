export const profile = {
  name: "Khampheeraphop Thongsaeng",
  nickname: "Phop",
  portraitUrl: "/images/khampheeraphop-portrait.webp",
  company: "Blueseas Enterprise Co., Ltd.",
  companyUrl: "https://www.blueseas.co.th/",
  internship: {
    startDate: "2024-11-01",
    endDate: "2027-02-28",
  },
  resumeUrls: {
    th: "/resume/Khampheeraphop-Thongsaeng-Resume-TH.pdf",
    en: "/resume/Khampheeraphop-Thongsaeng-Resume-EN.pdf",
  },
};
export const stack = [
  "TypeScript",
  "React",
  "MUI (Material UI)",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "GitLab",
  "Harbor",
  "Jenkins",
  "Docker",
];
export type ContactLabel = "Phone" | "Email" | "GitHub" | "LinkedIn" | "Facebook";
export const contacts: { label: ContactLabel; url: string; display: string }[] =
  [
    {
      label: "Phone",
      url: "tel:0838533191",
      display: "0838533191",
    },
    {
      label: "Email",
      url: "mailto:khampheeraphop.thon@gmail.com",
      display: "khampheeraphop.thon@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/Khampheeraphop",
      display: "Khampheeraphop",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/khampheeraphop-thongsaeng-547a1643b/",
      display: "Khampheeraphop Thongsaeng",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/khampheeraphop.thongsaeng",
      display: "Khampheeraphop Thongsaeng",
    },
  ];
