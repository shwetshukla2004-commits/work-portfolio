import React from 'react';
import {
  Activity,
  HeartPulse,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  ScanLine,
  Users,
  Network,
  HeartHandshake,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Heart,
  HelpCircle,
  Info,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Printer,
  Search,
  Sliders,
  Sparkle,
  UserCheck,
  X,
  Globe,
  Quote,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Send,
  AlertCircle,
  GraduationCap,
  Briefcase,
  RotateCcw,
  Upload,
  Eye
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "w-5 h-5", size }) => {
  switch (name) {
    case 'Activity':
      return <Activity className={className} size={size} />;
    case 'HeartPulse':
      return <HeartPulse className={className} size={size} />;
    case 'Stethoscope':
      return <Stethoscope className={className} size={size} />;
    case 'Sparkles':
      return <Sparkles className={className} size={size} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} size={size} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} size={size} />;
    case 'ScanLine':
      return <ScanLine className={className} size={size} />;
    case 'Users':
      return <Users className={className} size={size} />;
    case 'Network':
      return <Network className={className} size={size} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} size={size} />;
    case 'Award':
      return <Award className={className} size={size} />;
    case 'BookOpen':
      return <BookOpen className={className} size={size} />;
    case 'Building2':
      return <Building2 className={className} size={size} />;
    case 'Calendar':
      return <Calendar className={className} size={size} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} size={size} />;
    case 'Clock':
      return <Clock className={className} size={size} />;
    case 'Download':
      return <Download className={className} size={size} />;
    case 'ExternalLink':
      return <ExternalLink className={className} size={size} />;
    case 'FileCheck':
      return <FileCheck className={className} size={size} />;
    case 'FileText':
      return <FileText className={className} size={size} />;
    case 'Heart':
      return <Heart className={className} size={size} />;
    case 'HelpCircle':
      return <HelpCircle className={className} size={size} />;
    case 'Info':
      return <Info className={className} size={size} />;
    case 'Layers':
      return <Layers className={className} size={size} />;
    case 'Linkedin':
      return <Linkedin className={className} size={size} />;
    case 'Mail':
      return <Mail className={className} size={size} />;
    case 'MapPin':
      return <MapPin className={className} size={size} />;
    case 'Phone':
      return <Phone className={className} size={size} />;
    case 'Printer':
      return <Printer className={className} size={size} />;
    case 'Search':
      return <Search className={className} size={size} />;
    case 'Sliders':
      return <Sliders className={className} size={size} />;
    case 'UserCheck':
      return <UserCheck className={className} size={size} />;
    default:
      return <Activity className={className} size={size} />;
  }
};

export {
  Activity,
  HeartPulse,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  ScanLine,
  Users,
  Network,
  HeartHandshake,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Heart,
  HelpCircle,
  Info,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Printer,
  Search,
  Sliders,
  Sparkle,
  UserCheck,
  X,
  Globe,
  Quote,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Send,
  AlertCircle,
  GraduationCap,
  Briefcase,
  RotateCcw,
  Upload,
  Eye
};
