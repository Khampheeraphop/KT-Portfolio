"use client";
import { Box, Stack, Typography } from "@mui/material";
import type { Project } from "../types";
import { drift, signal } from "@/theme/motion";

export function ProjectDiagram({project,large=false,compact=false}:{project:Project;large?:boolean;compact?:boolean}) {
  return <Box aria-hidden="true" sx={{width:"100%",height:compact?190:large?{xs:340,md:400}:300,bgcolor:theme=>theme.palette.mode==="dark"?"#193652":project.category==="production"?"#c3dedd":project.category==="poc"?"#cdd9f0":"#bdd5ed",position:"relative",overflow:"hidden",border:compact?0:1,borderColor:"divider",borderRadius:compact?0:1,isolation:"isolate"}}>
    {!compact&&<Typography variant="overline" color="text.secondary" sx={{position:"absolute",top:22,left:25}}>SYSTEM / {project.category.toUpperCase()}</Typography>}
    <Stack sx={{position:"absolute",inset:compact?"12% 8%":large?"19% 15%":"22% 12%",alignItems:"center",transform:project.id==="document-workflow"?"rotate(7deg)":"rotate(-7deg)",animation:drift+" 6s ease-in-out infinite"}}>
      {project.nodes.map((node,index)=><Box key={node} sx={{display:"contents"}}>
        {index>0&&<Box sx={{height:compact?12:20,minHeight:compact?12:14,width:"1px",bgcolor:"#6c98d5",position:"relative","&::after":{content:'""',position:"absolute",width:5,height:5,bgcolor:"primary.main",borderRadius:"50%",left:-2,animation:signal+" 2.5s infinite"}}}/>}
        <Box sx={{bgcolor:index===1?"#0c62d9":"background.paper",color:index===1?"#fff":"text.primary",border:"1px solid #83ade2",boxShadow:"5px 6px 0 #497db126",py:compact?.5:large?2.25:1.75,px:compact?1.5:2.5,minWidth:compact?135:large?210:150,textAlign:"center",borderRadius:.75,zIndex:2}}>
          <Typography variant="caption" sx={{letterSpacing:".06em",fontSize:compact?".75rem":".8rem"}}>{node}</Typography>
        </Box>
      </Box>)}
    </Stack>
    {!compact&&<Typography variant="caption" color="text.secondary" sx={{position:"absolute",left:25,bottom:22}}>CONCEPT / {project.tags[0].toUpperCase()}</Typography>}
    <Box component="span" sx={{position:"absolute",fontSize:compact?"9rem":"15rem",right:-10,bottom:-35,opacity:.1,color:"primary.main",lineHeight:1,zIndex:-1}}>{project.category==="service"?"⌘":"✳"}</Box>
  </Box>;
}
