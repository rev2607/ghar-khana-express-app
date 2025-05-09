
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChefHat, Truck, Package, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const TrackingPage: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  // Mock order data - in a real application, this would come from an API
  const orderData = {
    id: 'NGK1234567',
    status: 'out_for_delivery',
    customer: 'Raj Sharma',
    address: '123 Pali Hill, Bandra West, Mumbai 400050',
    timestamp: '10:45 AM',
    estimatedDelivery: '11:30 AM',
    items: [
      { name: 'Butter Chicken', quantity: 1 },
      { name: 'Jeera Rice', quantity: 1 },
      { name: 'Garlic Naan', quantity: 2 }
    ],
    deliveryAgent: {
      name: 'Suresh Kumar',
      phone: '+91 98765 43210'
    }
  };

  const trackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim() === '') return;
    setIsTracking(true);
  };

  const getStatusSteps = () => {
    const steps = [
      {
        id: 'preparing',
        title: 'Meal Being Prepared',
        description: 'Our chef is cooking your meal fresh',
        time: '10:15 AM',
        icon: <ChefHat className="h-6 w-6" />
      },
      {
        id: 'packed',
        title: 'Meal Packed',
        description: 'Your food has been packed with care',
        time: '10:35 AM',
        icon: <Package className="h-6 w-6" />
      },
      {
        id: 'out_for_delivery',
        title: 'Out for Delivery',
        description: 'Your food is on its way to you',
        time: '10:45 AM',
        icon: <Truck className="h-6 w-6" />
      },
      {
        id: 'delivered',
        title: 'Delivered',
        description: 'Your food has been delivered',
        time: 'Pending',
        icon: <CheckCircle className="h-6 w-6" />
      }
    ];

    let activeFound = false;
    
    // For the example, we'll mark steps as completed until we hit the current status
    return steps.map(step => {
      if (activeFound) {
        return { ...step, status: 'pending' };
      }
      
      if (step.id === orderData.status) {
        activeFound = true;
        return { ...step, status: 'active' };
      }
      
      return { ...step, status: 'completed' };
    });
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-beige-100 to-beige-50 py-14">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Order Tracking</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Track Your Order
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Keep track of your order's journey from our kitchen to your doorstep.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {!isTracking ? (
          <Card className="max-w-md mx-auto shadow-sm">
            <CardContent className="pt-6">
              <form onSubmit={trackOrder}>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-medium mb-4">Enter Your Order ID</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      You can find your Order ID in the confirmation email or SMS.
                    </p>
                  </div>

                  <Input
                    placeholder="e.g., NGK1234567"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />

                  <Button type="submit" className="w-full">
                    Track Order
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-medium">Order Status</h2>
                      <p className="text-sm text-muted-foreground">Order ID: {orderData.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Expected Delivery by</p>
                      <p className="font-medium">{orderData.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute top-6 left-6 bottom-6 w-0.5 bg-muted" />

                    {/* Status Steps */}
                    <div className="space-y-8 relative">
                      {getStatusSteps().map((step, index) => (
                        <div key={index} className="flex">
                          <div className="relative z-10 mr-4">
                            <div className={`rounded-full p-1.5 
                              ${step.status === 'completed' ? 'bg-primary text-white' : 
                                step.status === 'active' ? 'bg-primary/20 text-primary border-2 border-primary' : 
                                'bg-muted text-muted-foreground'}`}
                            >
                              {step.icon}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className={`font-medium ${step.status !== 'pending' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                              </div>
                              <span className={`text-sm ${step.status !== 'pending' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {step.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm mt-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-4">Order Details</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Items</h3>
                      <ul className="space-y-2">
                        {orderData.items.map((item, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>x{item.quantity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Delivery Address</h3>
                      <p>{orderData.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4">Delivery Executive</h2>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xl font-medium">{orderData.deliveryAgent.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{orderData.deliveryAgent.name}</p>
                      <p className="text-sm text-muted-foreground">Delivery Partner</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${orderData.deliveryAgent.phone}`}>
                        <Phone className="mr-2 h-4 w-4" /> Call
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" /> Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm mt-6 bg-accent/20">
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium mb-1">Any Issues?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Contact our customer support for immediate assistance.
                      </p>
                      <Button size="sm" variant="outline" asChild>
                        <a href="tel:+911234567890">Call Support</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingPage;
