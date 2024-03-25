import { SearchInput, Conversations, LogoutButton, BackButton } from "../";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider"></div>
      <BackButton />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
