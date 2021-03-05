import HeaderAdmin from "./header";
import SidebarAdmin from "./sidebar";


export default function LayoutAdmin({children}) {
  return (
    <div className="contains">
 <HeaderAdmin/>
<SidebarAdmin/>
{children}

 </div>
  );
}
