
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Clock, 
  ShoppingBag, 
  Truck, 
  Calendar, 
  Utensils,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 bg-gradient-to-br from-beige-100 to-beige-50">
        <div className="container flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <Badge className="mb-4">Mumbai's Favorite Home Food</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Homemade <span className="text-primary">Indian Meals</span> Delivered Fresh
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Enjoy authentic, home-style cooking with flexible meal plans, personalized to your taste and dietary needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/menu">Explore Menu</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/subscription">View Plans</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Delicious Indian Thali"
                className="rounded-full object-cover w-full h-full shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-4 flex items-center justify-center animate-bounce">
                <div className="text-center">
                  <p className="text-xs font-medium text-muted-foreground">Starting at</p>
                  <p className="text-xl font-bold text-primary">₹149</p>
                  <p className="text-xs">Per meal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured In */}
        <div className="container mt-12 md:mt-20">
          <p className="text-center text-sm text-muted-foreground mb-6">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="https://via.placeholder.com/120x40" alt="Times of India" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="Mumbai Mirror" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="Food Lover's Magazine" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="Zomato" className="h-8" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get delicious homemade meals delivered to your doorstep in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                title: "Select Your Plan",
                description: "Choose from our daily, weekly, or monthly subscription plans."
              },
              {
                icon: <Utensils className="h-10 w-10 text-primary" />,
                title: "Customize Meals",
                description: "Select your meal preferences, dietary restrictions, and portion size."
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary" />,
                title: "Schedule Delivery",
                description: "Set your preferred delivery time and location for your meals."
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Enjoy Fresh Food",
                description: "Receive hot, fresh meals straight to your doorstep, ready to eat."
              }
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-accent rounded-full p-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ghar Ka Khana Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-2">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Comfort of Home-Cooked Meals</h2>
              <p className="text-muted-foreground mb-8">
                We believe in the power of homemade food - made with love, fresh ingredients, and traditional recipes passed down through generations.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Fresh, Locally Sourced Ingredients",
                    description: "We use only the freshest ingredients from local markets for authentic flavors."
                  },
                  {
                    title: "Authentic Home-Style Cooking",
                    description: "Our meals are prepared by experienced home chefs using traditional methods."
                  },
                  {
                    title: "Customizable to Your Needs",
                    description: "Special dietary requirements? No problem! We customize meals to fit your needs."
                  },
                  {
                    title: "Flexible Subscription Plans",
                    description: "Choose from daily, weekly, or monthly plans with easy scheduling options."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8" asChild>
                <Link to="/subscription">Get Started</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwdGhhbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Traditional Indian Thali"
                  className="rounded-lg shadow-lg object-cover h-64"
                />
                <img 
                  src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZm9vZCUyMGNoZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Home Chef Cooking"
                  className="rounded-lg shadow-lg object-cover h-64 mt-12"
                />
                <img 
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Fresh Indian Spices"
                  className="rounded-lg shadow-lg object-cover h-64 mt-6"
                />
                <img 
                  src="https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Fresh Baked Bread"
                  className="rounded-lg shadow-lg object-cover h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menus Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2">Our Offerings</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Sample Menus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a taste of our diverse meal options, with regional specialties and customizable choices.
            </p>
          </div>

          <Tabs defaultValue="north" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="north">North Indian</TabsTrigger>
                <TabsTrigger value="south">South Indian</TabsTrigger>
                <TabsTrigger value="maharashtrian">Maharashtrian</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="north" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Butter Chicken with Naan",
                    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹220",
                    type: "Non-Veg"
                  },
                  {
                    name: "Paneer Tikka Masala",
                    image: "https://images.unsplash.com/photo-1596797038534-2316ff0c56b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹180",
                    type: "Veg"
                  },
                  {
                    name: "Rajma Chawal",
                    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqbWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹149",
                    type: "Veg"
                  }
                ].map((meal, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant={meal.type === "Veg" ? "secondary" : "default"}>
                          {meal.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{meal.name}</h3>
                        <span className="font-semibold text-primary">{meal.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/menu">View Full Menu</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="south" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Masala Dosa with Sambar",
                    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹160",
                    type: "Veg"
                  },
                  {
                    name: "Hyderabadi Chicken Biryani",
                    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹220",
                    type: "Non-Veg"
                  },
                  {
                    name: "Chettinad Vegetable Curry",
                    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    price: "₹170",
                    type: "Veg"
                  }
                ].map((meal, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant={meal.type === "Veg" ? "secondary" : "default"}>
                          {meal.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{meal.name}</h3>
                        <span className="font-semibold text-primary">{meal.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/menu">View Full Menu</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="maharashtrian" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Puran Poli with Ghee",
                    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹150",
                    type: "Veg"
                  },
                  {
                    name: "Varan Bhaat with Toop",
                    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    price: "₹130",
                    type: "Veg"
                  },
                  {
                    name: "Bombil Fry",
                    image: "https://images.unsplash.com/photo-1600891963935-9e9adbc30eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZWQlMjBmaXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    price: "₹190",
                    type: "Non-Veg"
                  }
                ].map((meal, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant={meal.type === "Veg" ? "secondary" : "default"}>
                          {meal.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{meal.name}</h3>
                        <span className="font-semibold text-primary">{meal.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/menu">View Full Menu</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2">Customer Love</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our customers love our home-cooked meals and flexible subscription plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Working Professional",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                quote: "The meals remind me of my mother's cooking. Perfect for busy weekdays when I don't have time to cook but want healthy, tasty food."
              },
              {
                name: "Rahul Patel",
                role: "Fitness Enthusiast",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "I love that I can customize my meals based on my protein requirements. The high-protein options are delicious and help with my fitness goals."
              },
              {
                name: "Anjali Desai",
                role: "Mother of Two",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                quote: "Finding kid-friendly meals that are also nutritious is hard. Neelam's meals are a hit with my children and save me so much time."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                        <Star size={16} className="text-white fill-white" />
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2">Subscription Plans</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Meal Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Daily",
                description: "Perfect for regular meals",
                price: "₹149",
                unit: "per meal",
                features: [
                  "One meal per day",
                  "Choose between lunch or dinner",
                  "48-hour meal customization",
                  "Free delivery in select areas"
                ],
                icon: <Clock className="h-8 w-8" />,
                popular: false
              },
              {
                name: "Weekly",
                description: "Most popular option",
                price: "₹999",
                unit: "per week",
                features: [
                  "7 meals per week",
                  "Flexible delivery schedule",
                  "Weekly menu customization",
                  "Free delivery in Mumbai",
                  "Weekend special dishes included"
                ],
                icon: <Calendar className="h-8 w-8" />,
                popular: true
              },
              {
                name: "Monthly",
                description: "Best value for money",
                price: "₹3,599",
                unit: "per month",
                features: [
                  "30 meals per month",
                  "Complete menu access",
                  "Unlimited customization",
                  "Priority delivery",
                  "Chef's special surprise dishes",
                  "10% discount on additional orders"
                ],
                icon: <Calendar className="h-8 w-8" />,
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`flex flex-col ${plan.popular ? 'border-primary shadow-md relative' : 'shadow-sm'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                <CardContent className={`p-6 flex-grow flex flex-col ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-muted'}`}>
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-center mb-6">{plan.description}</p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`mt-auto ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <Link to="/subscription">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-accent rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-turmeric-300/20 to-coriander-300/20"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Ghar Ka Khana?</h2>
                <p className="text-muted-foreground max-w-xl">
                  Start your subscription today and enjoy delicious homemade meals delivered right to your doorstep.
                </p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/subscription">Start Subscription</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/menu">Browse Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
