import { forwardRef } from "react";
import {
  X,
  MessageCircle,
  Search,
  Users,
  LogOut,
  Plus,
  User as UserIcon,
} from "lucide-react";

interface SidebarPrors {
  isOpen: void;
  onClose: void;
  user?: string;
  userInitial: void;
  currentChat: void;
  onSelectChat: void;
  onLogout: void;
  isConnected: void;
}

const Sidebar = forwardRef(
  (
    {
      isOpen,
      onClose,
      user,
      userInitial,
      currentChat,
      onSelectChat,
      onLogout,
      isConnected,
    },
    ref,
  ):  => {
    // Список чатов (можно расширить)
    const chats = [
      {
        id: 1,
        name: "Генеральный чат",
        icon: Users,
        description: "Основной общий чат",
        online: 12,
      },
    ];

    return (
      <aside
        ref={ref}
        className={`
        fixed md:static inset-y-0 left-0 z-40 w-80 
        bg-[#0f1422]/95 md:bg-[#0f1422]/90 backdrop-blur-xl 
        border-r border-red-900/30 flex flex-col shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Заголовок боковой панели */}
        <div className="p-4 md:p-6 border-b border-red-900/30">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                RedChat
              </h1>
            </div>
            <div className="flex items-center gap-2">
              {/* Кнопка закрытия на мобильных */}
              <button
                onClick={onClose}
                className="md:hidden p-2 hover:bg-red-900/20 rounded-xl transition-colors duration-200"
                title="Закрыть"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
              {/* Кнопка нового чата */}
              <button
                className="hidden md:block p-2.5 hover:bg-red-900/20 rounded-xl transition-colors duration-200 group"
                title="Новый чат"
              >
                <Plus className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </button>
            </div>
          </div>

          {/* Поиск */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Поиск чатов..."
              className="w-full pl-10 pr-4 py-2 md:py-2.5 bg-[#0a0e27]/60 border border-red-900/30 rounded-xl text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Список чатов */}
        <div className="flex-1 overflow-y-auto p-2 md:p-3 space-y-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.name)}
              className={`
              p-3 md:p-4 flex items-center gap-2 md:gap-3 cursor-pointer 
              hover:bg-red-900/20 active:bg-red-900/30 rounded-xl 
              transition-all duration-200 group chat-item
              ${currentChat === chat.name ? "bg-red-900/10 border border-red-900/30" : ""}
            `}
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-200">
                  <chat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 border-2 border-[#0a0e27] rounded-full"></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm md:text-base truncate">
                  {chat.name}
                </p>
                <p className="text-gray-400 text-xs md:text-sm truncate hidden md:block">
                  {chat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Профиль пользователя */}
        <div className="p-3 md:p-4 border-t border-red-900/30 bg-[#0a0e27]/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-linear-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-900/50">
                {userInitial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-xs md:text-sm truncate">
                  {user?.username || "Гость"}
                </p>
                <p className="text-gray-500 text-xs truncate">
                  {isConnected ? "В сети" : "Подключение..."}
                </p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="p-2 md:p-2.5 hover:bg-red-900/30 rounded-xl transition-colors duration-200 group ml-2"
              title="Выход"
            >
              <LogOut className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
export default Sidebar;
