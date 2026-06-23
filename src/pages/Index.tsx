import { useState } from "react";
import {
  ArrowRight,
  Hash,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [checkInput, setCheckInput] = useState("");
  const [checkResult, setCheckResult] = useState<null | "ok" | "fail" | "loading">(null);

  const handleCheck = () => {
    if (!checkInput.trim()) return;
    setCheckResult("loading");
    setTimeout(() => {
      setCheckResult(Math.random() > 0.4 ? "ok" : "fail");
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Icon name="BrainCircuit" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">VeriDoc AI</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Автоматизированная ИИ-верификация по документам</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Документация
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Запросить доступ
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Документация
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Запросить доступ
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Icon name="BrainCircuit" size={24} className="text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {[
            { icon: "FileSearch", label: "Поиск" },
            { icon: "ShieldCheck", label: "Проверка" },
            { icon: "Database", label: "База" },
            { icon: "BarChart2", label: "Отчёты" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] group"
              title={item.label}
            >
              <Icon name={item.icon} size={20} className="text-[#dcddde]" />
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}>
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">VeriDoc AI</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Рабочие модули</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {[
                    { name: "верификация", active: true },
                    { name: "загрузка-документов" },
                    { name: "история-проверок" },
                    { name: "отчёты" },
                  ].map((channel) => (
                    <div
                      key={channel.name}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors ${
                        channel.active
                          ? "bg-[#393c43] text-[#dcddde]"
                          : "text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43]"
                      }`}
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Базы знаний</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Нормативные акты", "Технические регламенты"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Icon name="Database" size={16} />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Аналитик</div>
                <div className="text-[#b9bbbe] text-xs truncate">онлайн</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Главная область */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок канала */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">верификация</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Проверка строки на соответствие требованиям документов</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Контент */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение от бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="BrainCircuit" size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">VeriDoc Bot</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в VeriDoc AI!</strong> Система автоматической верификации данных на основе RAG-агента и загруженных нормативных документов.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Возможности системы:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>📄 Загрузка нормативных документов и регламентов в базу знаний</li>
                        <li>🔍 Анализ входящей строки RAG-агентом с поиском по документам</li>
                        <li>✅ Верификация соответствия требованиям с обоснованием</li>
                        <li>📊 Детальный отчёт с указанием нарушений и ссылок на нормы</li>
                        <li>⚡ Ответ за секунды — без ручной проверки</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Демо верификации */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">И</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Инженер по качеству</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:12</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Проверяю новую партию — загружаю строку на верификацию:
                  </div>

                  {/* Карточка верификации */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-xl">
                    <div className="h-2 bg-gradient-to-r from-[#5865f2] to-[#7c3aed]"></div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="ScanSearch" size={18} className="text-[#5865f2]" />
                        <span className="text-white font-semibold text-sm sm:text-base">Модуль верификации</span>
                        <span className="ml-auto text-[#3ba55c] text-xs flex items-center gap-1">
                          <span className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse inline-block"></span>
                          RAG-агент активен
                        </span>
                      </div>

                      {/* Поле ввода */}
                      <div className="mb-3">
                        <label className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 block">
                          Строка для проверки
                        </label>
                        <textarea
                          className="w-full bg-[#40444b] border border-[#202225] rounded-lg px-3 py-2 text-[#dcddde] text-sm resize-none focus:outline-none focus:border-[#5865f2] transition-colors"
                          rows={3}
                          placeholder="Введите текст, данные или строку для верификации по требованиям документов..."
                          value={checkInput}
                          onChange={(e) => {
                            setCheckInput(e.target.value);
                            setCheckResult(null);
                          }}
                        />
                      </div>

                      <Button
                        className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white rounded text-sm font-medium py-2 disabled:opacity-50"
                        onClick={handleCheck}
                        disabled={!checkInput.trim() || checkResult === "loading"}
                      >
                        {checkResult === "loading" ? (
                          <span className="flex items-center gap-2 justify-center">
                            <Icon name="Loader2" size={16} className="animate-spin" />
                            Анализирую документы...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2 justify-center">
                            <Icon name="ShieldCheck" size={16} />
                            Проверить соответствие
                          </span>
                        )}
                      </Button>

                      {/* Результат */}
                      {checkResult === "ok" && (
                        <div className="mt-3 bg-[#1e3a2f] border border-[#3ba55c] rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="CheckCircle2" size={16} className="text-[#3ba55c]" />
                            <span className="text-[#3ba55c] font-semibold text-sm">Соответствует требованиям</span>
                          </div>
                          <p className="text-[#b9bbbe] text-xs">
                            RAG-агент проверил строку по загруженным документам. Нарушений нормативных требований не выявлено. Строка допускается к использованию.
                          </p>
                          <div className="mt-2 flex items-center gap-1 text-[#72767d] text-xs">
                            <Icon name="BookOpen" size={12} />
                            <span>Проверено по 3 документам · 12 релевантных фрагментов</span>
                          </div>
                        </div>
                      )}
                      {checkResult === "fail" && (
                        <div className="mt-3 bg-[#3a1e1e] border border-[#ed4245] rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="XCircle" size={16} className="text-[#ed4245]" />
                            <span className="text-[#ed4245] font-semibold text-sm">Несоответствие обнаружено</span>
                          </div>
                          <p className="text-[#b9bbbe] text-xs">
                            Строка не соответствует требованиям раздела 3.2 регламента. RAG-агент нашёл противоречие с нормой: значение выходит за допустимые пределы.
                          </p>
                          <div className="mt-2 flex items-center gap-1 text-[#72767d] text-xs">
                            <Icon name="BookOpen" size={12} />
                            <span>Источник: Технический регламент №47, п. 3.2.1</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение второго пользователя */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">Р</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Руководитель отдела</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:15</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Отличная система — раньше такая проверка занимала несколько часов вручную 🔥
                  </div>
                </div>
              </div>

              {/* Как начать */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Rocket" size={22} className="text-[#5865f2]" />
                  Как начать работу с VeriDoc AI
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Загрузите документы</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Добавьте нормативные акты, регламенты и стандарты в базу знаний RAG-агента</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Введите строку</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Вставьте данные или текст, которые нужно проверить на соответствие требованиям</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Получите вердикт</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">ИИ-агент анализирует и выдаёт заключение с обоснованием и ссылкой на норму</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Загрузить документы
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Документация
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему VeriDoc AI?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: "Zap",
                      title: "Мгновенный ответ",
                      desc: "Анализ за секунды вместо часов ручной проверки",
                    },
                    {
                      icon: "FileSearch",
                      title: "Точный поиск по документам",
                      desc: "RAG-агент находит релевантные нормы среди тысяч страниц",
                    },
                    {
                      icon: "ShieldCheck",
                      title: "Обоснованный вердикт",
                      desc: "Каждый ответ со ссылкой на конкретный пункт документа",
                    },
                    {
                      icon: "RefreshCw",
                      title: "Актуальная база",
                      desc: "Добавляйте и обновляйте документы в любой момент",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">
                        <Icon name={feature.icon} size={18} />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода (декоративное) */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 text-[#72767d] text-xs sm:text-sm">
                <Icon name="MessageSquarePlus" size={16} />
                Сообщение #верификация
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Активные пользователи — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Инженер по качеству",
                    status: "Проверяет данные",
                    avatar: "И",
                    color: "from-purple-500 to-indigo-500",
                  },
                  {
                    name: "Руководитель отдела",
                    status: "Просматривает отчёт",
                    avatar: "Р",
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    name: "Администратор",
                    status: "Загружает документы",
                    avatar: "А",
                    color: "from-blue-500 to-purple-500",
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Статус системы */}
            <div className="mt-6">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Статус системы</h3>
              <div className="space-y-2">
                {[
                  { label: "RAG-агент", ok: true },
                  { label: "База документов", ok: true },
                  { label: "ИИ-модель", ok: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-[#b9bbbe]">{item.label}</span>
                    <span className={`flex items-center gap-1 ${item.ok ? "text-[#3ba55c]" : "text-[#ed4245]"}`}>
                      <span className={`w-2 h-2 rounded-full ${item.ok ? "bg-[#3ba55c]" : "bg-[#ed4245]"} animate-pulse`}></span>
                      {item.ok ? "Активен" : "Ошибка"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
