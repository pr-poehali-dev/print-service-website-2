import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { icon: 'Image', title: 'Фото 10×15', desc: 'от 5 ₽', color: 'bg-blue-50' },
    { icon: 'IdCard', title: 'Фото на документы', desc: 'от 150 ₽', color: 'bg-purple-50' },
    { icon: 'FileText', title: 'Печать А4/А3', desc: 'от 3 ₽', color: 'bg-green-50' },
    { icon: 'Copy', title: 'Ксерокопия', desc: 'от 2 ₽', color: 'bg-orange-50' },
    { icon: 'ScanLine', title: 'Сканирование', desc: 'от 10 ₽', color: 'bg-pink-50' },
    { icon: 'FileBadge', title: 'Ламинация', desc: 'от 30 ₽', color: 'bg-yellow-50' },
    { icon: 'Frame', title: 'Печать на холсте', desc: 'от 500 ₽', color: 'bg-indigo-50' },
    { icon: 'Gift', title: 'Сувениры', desc: 'от 200 ₽', color: 'bg-red-50' },
  ];

  const steps = [
    { icon: 'MousePointerClick', title: 'Выберите услугу', desc: 'Фото, документы или сувениры' },
    { icon: 'Upload', title: 'Загрузите файлы', desc: 'Поддержка JPG, PNG, PDF' },
    { icon: 'Settings', title: 'Настройте параметры', desc: 'Размер, бумага, количество' },
    { icon: 'Package', title: 'Получите заказ', desc: 'Самовывоз или доставка' },
  ];

  const reviews = [
    { name: 'Анна К.', rating: 5, text: 'Отличное качество печати! Заказ готов был через 20 минут. Очень довольна!' },
    { name: 'Дмитрий П.', rating: 5, text: 'Удобный онлайн-заказ, адекватные цены. Буду обращаться ещё.' },
    { name: 'Елена С.', rating: 5, text: 'Печатала фотокнигу — результат превзошёл ожидания. Спасибо!' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Camera" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900">ФотоПринт</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setActiveSection('home')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => setActiveSection('services')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => setActiveSection('price')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Прайс</button>
              <button onClick={() => setActiveSection('contacts')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Контакты</button>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwRUE1RTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              🚀 Срочная печать от 15 минут
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Фотопечать в Видном — <span className="text-primary">быстро и качественно</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Печать фото и документов, копирование, ламинация. Самовывоз или доставка по городу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                <Icon name="DollarSign" size={20} className="mr-2" />
                Посмотреть цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг фотопечати и копи-центра в одном месте
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как сделать заказ</h2>
            <p className="text-gray-600">Всего 4 простых шага до готового заказа</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <Icon name={step.icon} size={28} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold text-sm border-2 border-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Мы на карте</h2>
            <p className="text-gray-600">г. Видное, ул. Примерная, д. 1</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Интерактивная карта</p>
                <Button variant="outline">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Открыть в Яндекс Картах
                </Button>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-gray-600">г. Видное, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Время работы</p>
                    <p className="text-sm text-gray-600">Пн-Вс: 9:00 — 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">info@fotoprint.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600">Нам доверяют сотни клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {review.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Загрузите файлы онлайн или посетите наш офис. Мы работаем каждый день с 9:00 до 21:00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Upload" size={20} className="mr-2" />
              Загрузить файлы
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Camera" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ФотоПринт</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная фотопечать и копи-центр в Видном
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Печать фотографий</li>
                <li>Фото на документы</li>
                <li>Печать документов</li>
                <li>Ламинация</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О компании</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@fotoprint.ru</li>
                <li>г. Видное, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ФотоПринт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;