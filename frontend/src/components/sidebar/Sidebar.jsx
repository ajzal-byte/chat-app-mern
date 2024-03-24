import { SearchInput, Conversations, LogoutButton } from "../";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider p-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;