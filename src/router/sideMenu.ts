import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DatasetIcon from "@mui/icons-material/Dataset";
import BarChartIcon from "@mui/icons-material/BarChart";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import RuleIcon from "@mui/icons-material/Rule";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TaskIcon from "@mui/icons-material/Task";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import IntelligenceIcon from "../../public/intelience.svg?react";

const sideMenu = [
  {
    title: "Impact",
    path: "/impact",
    icon: AutoGraphIcon,
  },
  {
    title: "Data",
    path: "/data",
    icon: DatasetIcon,
  },
  {
    title: "Reporting",
    path: "/reporting",
    icon: BarChartIcon,
  },
  {
    title: "Learn",
    path: "/learn",
    icon: WorkspacePremiumIcon,
  },
  {
    title: "governance",
    path: "/governance",
    icon: PolicyOutlinedIcon,
  },
  {
    title: "Docs",
    path: "/docs",
    icon: DocumentScannerIcon,
  },
  {
    title: "Intelligence",
    path: "/intelligence",
    icon: IntelligenceIcon,
  },
  {
    title: "Surveys",
    path: "/surveys",
    icon: RuleIcon,
  },
  {
    title: "Flows",
    path: "/flows",
    icon: AirlineStopsIcon,
  },
  {
    title: "Tasks",
    path: "/task",
    icon: TaskIcon,
  },
  {
    title: "Configuration",
    path: "/configuration",
    icon: SettingsOutlinedIcon,
  },
  {
    title: "Support",
    path: "/support",
    icon: SupportAgentIcon,
  },
];

export default sideMenu;
