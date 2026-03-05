import { Cpu, Database, Smartphone, Layout, Server, Globe } from 'lucide-react';

export const SKILLS = [
  { name: ".Net / C#", icon: <Cpu className="w-5 h-5" />, level: 90 },
  { name: "SQL Server / MySQL", icon: <Database className="w-5 h-5" />, level: 85 },
  { name: "Android / Kotlin", icon: <Smartphone className="w-5 h-5" />, level: 80 },
  { name: "Angular / React", icon: <Layout className="w-5 h-5" />, level: 75 },
  { name: "Node.js / JS / TS", icon: <Server className="w-5 h-5" />, level: 70 },
  { name: "Web Architecture", icon: <Globe className="w-5 h-5" />, level: 85 }
];
