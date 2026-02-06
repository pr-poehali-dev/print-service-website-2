import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    { title: 'Portrait Sessions', desc: 'Professional headshots & portraits', icon: 'User' },
    { title: 'Commercial Photography', desc: 'Product & advertising shoots', icon: 'Camera' },
    { title: 'Event Coverage', desc: 'Corporate & private events', icon: 'Calendar' },
    { title: 'Photo Editing', desc: 'Professional retouching services', icon: 'Sparkles' },
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '99',
      desc: 'Perfect for individuals',
      features: ['1 hour session', '20 edited photos', 'Digital delivery', 'Basic retouching'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '249',
      desc: 'Ideal for professionals',
      features: ['3 hour session', '50 edited photos', 'Digital + prints', 'Advanced retouching', 'Studio props included'],
      popular: true,
    },
    {
      name: 'Premium',
      price: '499',
      desc: 'Complete package',
      features: ['Full day session', '100+ edited photos', 'All formats included', 'Priority editing', 'Makeup artist included', 'Location options'],
      popular: false,
    },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/23824e4a-fe76-4e90-aa9a-22748582b8ba/files/b63dbbfa-951d-4175-b51a-5032a168c3f4.jpg',
    'https://cdn.poehali.dev/projects/23824e4a-fe76-4e90-aa9a-22748582b8ba/files/7ef795b8-15d6-40fe-902e-c922afd3c093.jpg',
    'https://cdn.poehali.dev/projects/23824e4a-fe76-4e90-aa9a-22748582b8ba/files/d428447c-7348-45ba-9705-cb966a328643.jpg',
    'https://cdn.poehali.dev/projects/23824e4a-fe76-4e90-aa9a-22748582b8ba/files/b63dbbfa-951d-4175-b51a-5032a168c3f4.jpg',
    'https://cdn.poehali.dev/projects/23824e4a-fe76-4e90-aa9a-22748582b8ba/files/7ef795b8-15d6-40fe-902e-c922afd3c093.jpg',
    'https://cdn.poehali.dev/projects/23824e4a-fe76-4e90-aa9a-22748582b8ba/files/d428447c-7348-45ba-9705-cb966a328643.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                <Icon name="Camera" className="text-white" size={22} />
              </div>
              <span className="text-xl font-bold text-gray-900">Image Express</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#gallery" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Gallery</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                Book Session
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-gray-900 text-white hover:bg-gray-800">
              Professional Photography Studio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Capture Your<br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Perfect Moment
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional photography services for portraits, events, and commercial projects. 
              Express delivery within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-7 bg-gray-900 hover:bg-gray-800">
                <Icon name="Calendar" size={20} className="mr-2" />
                Book a Session
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-gray-300">
                <Icon name="Play" size={20} className="mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon name={service.icon} size={28} className="text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your photography needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${plan.popular ? 'border-2 border-gray-900 shadow-2xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gray-900 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.desc}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/session</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-gray-900 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'}`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of our recent photography projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <Icon name="ZoomIn" size={28} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book your session today and receive your professionally edited photos within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100">
              <Icon name="Calendar" size={20} className="mr-2" />
              Schedule Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                  <Icon name="Camera" className="text-white" size={22} />
                </div>
                <span className="text-xl font-bold text-gray-900">Image Express</span>
              </div>
              <p className="text-sm text-gray-600">Professional photography studio delivering excellence since 2015</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Portrait Photography</li>
                <li>Commercial Shoots</li>
                <li>Event Coverage</li>
                <li>Photo Editing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@imageexpress.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  123 Studio St, NY 10001
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2024 Image Express Studio. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
