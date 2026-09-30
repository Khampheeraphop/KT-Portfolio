export const profile = {
  name: "Khampheeraphop Thongsaeng",
  nickname: "Phop",
  company: "Blueseas Enterprise Co., Ltd.",
  companyUrl: "https://www.blueseas.co.th/",
  internship: {
    startDate: "2024-11-01",
    endDate: "2027-02-28",
  },
  resumeUrl: null as string | null,
};
export const stack = [
  "TypeScript",
  "React",
  "MUI (Material UI)",
  "Node.js",
  "MongoDB",
  "GitLab",
  "Harbor",
  "Jenkins",
  "Docker",
];
export type ContactLabel = "Email" | "GitHub" | "LinkedIn";
export const contacts: { label: ContactLabel; url: string; display: string }[] =
  [
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
  ];
