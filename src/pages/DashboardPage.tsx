
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Clock,
  CreditCard,
  Heart,
  Package,
  PauseCircle,
  Settings2,
  User,
  Gift,
  Repeat
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('current-plan');

  const userInfo = {
    name: 'Priya Sharma',
    email: 'priya.s@gmail.com',
    phone: '+91 98765 43210',
    subscriptionTier: 'Weekly Plan',
    nextDelivery: 'Today, 12:30 PM',
    points: 250,
    referrals: 2
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-beige-100 to-beige-50 py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div>
              <Badge className="mb-2">My Account</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">User Dashboard</h1>
              <p className="text-muted-foreground">Manage your meal plans, preferences and orders</p>
            </div>
            
            <div className="mt-6 md:mt-0 flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary/10 text-primary text-xl">
                  {userInfo.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-lg">{userInfo.name}</h2>
                <p className="text-sm text-muted-foreground">{userInfo.subscriptionTier}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full flex justify-start overflow-x-auto mb-6">
            <TabsTrigger value="current-plan" className="flex gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>Current Plan</span>
            </TabsTrigger>
            <TabsTrigger value="order-history" className="flex gap-2">
              <Clock className="h-4 w-4" />
              <span>Order History</span>
            </TabsTrigger>
            <TabsTrigger value="payment-methods" className="flex gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Payment Methods</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex gap-2">
              <Heart className="h-4 w-4" />
              <span>Meal Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Current Plan Tab */}
          <TabsContent value="current-plan" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium">Current Subscription</h2>
                    <Badge variant="secondary" className="font-medium">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Plan Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Subscription</span>
                          <span className="font-medium">Weekly Plan</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Next Billing Date</span>
                          <span className="font-medium">May 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount</span>
                          <span className="font-medium">₹999</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Delivery Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Next Delivery</span>
                          <span className="font-medium">Today, 12:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Address</span>
                          <span className="font-medium">Home</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Special Instructions</span>
                          <span className="font-medium">Leave at door</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <h3 className="text-lg font-medium mb-4">This Week's Menu</h3>
                  <div className="space-y-4">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
                      <div key={day} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{day}</p>
                          <p className="text-sm text-muted-foreground">Butter Chicken with Naan</p>
                        </div>
                        <Button variant="outline" size="sm">Change</Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <Button variant="outline" className="flex-1 gap-2">
                      <PauseCircle className="h-4 w-4" />
                      <span>Pause Plan</span>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Settings2 className="h-4 w-4" />
                      <span>Modify Plan</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-accent">
                        <Gift className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Loyalty Points</h3>
                        <p className="text-sm text-muted-foreground">Earn & redeem points</p>
                      </div>
                    </div>
                    <div className="text-center py-3">
                      <p className="text-3xl font-bold text-primary">{userInfo.points}</p>
                      <p className="text-sm text-muted-foreground">Available Points</p>
                    </div>
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" className="w-full">
                      Redeem Points
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm bg-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Repeat className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Refer & Earn</h3>
                        <p className="text-sm text-muted-foreground">Get ₹200 per referral</p>
                      </div>
                    </div>
                    <div className="bg-background rounded-md p-3 text-center mb-4">
                      <p className="text-sm font-medium">PRIYAREF2025</p>
                      <p className="text-xs text-muted-foreground">Your referral code</p>
                    </div>
                    <Button size="sm" className="w-full">
                      Share & Earn
                    </Button>
                    <div className="mt-4 flex justify-between text-sm">
                      <span>Total Referrals</span>
                      <span className="font-medium">{userInfo.referrals}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Order History Tab */}
          <TabsContent value="order-history" className="animate-fade-in">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-6">Order History</h2>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex gap-4 items-start">
                        <div className="bg-muted p-3 rounded-md">
                          <Package className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">Order #{Math.floor(Math.random() * 1000000)}</p>
                          <p className="text-sm text-muted-foreground">May {8 - index}, 2025</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="outline" className="text-xs">Butter Chicken</Badge>
                            <Badge variant="outline" className="text-xs">Jeera Rice</Badge>
                            <Badge variant="outline" className="text-xs">+2 more</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <Badge variant="secondary">Delivered</Badge>
                        <span className="font-medium">₹349</span>
                        <Button variant="outline" size="sm">Order Again</Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Orders</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Payment Methods Tab */}
          <TabsContent value="payment-methods" className="animate-fade-in">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-6">Payment Methods</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded-md">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">HDFC Credit Card</p>
                        <p className="text-sm text-muted-foreground">Ending with 4321</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Default</Badge>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded-md">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">SBI Debit Card</p>
                        <p className="text-sm text-muted-foreground">Ending with 8765</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button>Add New Payment Method</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Meal Preferences Tab */}
          <TabsContent value="preferences" className="animate-fade-in">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-6">My Preferences</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Dietary Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Vegetarian</span>
                        <Badge>Selected</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Non-Vegetarian</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Jain</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-4 mt-8">Special Diets</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Keto Friendly</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Diabetic Friendly</span>
                        <Badge>Selected</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>High Protein</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Cuisine Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>North Indian</span>
                        <Badge>Selected</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>South Indian</span>
                        <Badge>Selected</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Maharashtrian</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-4 mt-8">Allergies & Restrictions</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Dairy Free</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Nut Free</span>
                        <Badge>Selected</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Gluten Free</span>
                        <Button variant="outline" size="sm">Select</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button>Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="animate-fade-in">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-6">Profile Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Personal Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Name</span>
                          <span className="font-medium">{userInfo.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email</span>
                          <span className="font-medium">{userInfo.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phone</span>
                          <span className="font-medium">{userInfo.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Address Information</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between">
                            <span>Home</span>
                            <Badge variant="outline">Primary</Badge>
                          </div>
                          <p className="text-sm mt-1">
                            123 Pali Hill, Bandra West, Mumbai 400050
                          </p>
                        </div>
                        <div>
                          <span>Office</span>
                          <p className="text-sm mt-1">
                            456 Mindspace, Goregaon East, Mumbai 400063
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-muted/30 p-6 rounded-lg text-center mb-6">
                      <Avatar className="h-24 w-24 mx-auto">
                        <AvatarFallback className="bg-primary/10 text-primary text-3xl">
                          {userInfo.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-medium mt-4">{userInfo.name}</h3>
                      <p className="text-sm text-muted-foreground">Customer since April 2025</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Change Photo
                      </Button>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <Button variant="outline">Edit Profile</Button>
                      <Button variant="outline">Change Password</Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
