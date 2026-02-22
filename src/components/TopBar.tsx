import { MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground py-2 text-sm">
      <div className="container flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span className="font-medium">PARKING clients à notre adresse</span>
      </div>
    </div>
  );
};

export default TopBar;
