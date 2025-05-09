
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock,
  Calendar,
  Truck,
  CheckCircle,
  MapPin,
  Flame
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('weekly');
  const [selectedZone, setSelectedZone] = useState('central');
  const [spiceLevel, setSpiceLevel] = useState([2]); // 1-5 scale
  const [mealSize, setMealSize] = useState('regular');
  const [customizeEnabled, setCustomizeEnabled] = useState(false);

  const getPlanPrice = () => {
    switch (selectedPlan) {
      case 'daily': return 149;
      case 'weekly': return 999;
      case 'monthly': return 3599;
      default: return 0;
    }
  };

  const getDeliveryFee = () => {
    switch (selectedZone) {
      case 'central': return 0;
      case 'suburban': return 29;
      case 'extended': return 49;
      default: return 0;
    }
  };

  const getSizeMultiplier = () => {
    switch (mealSize) {
      case 'small': return 0.85;
      case 'large': return 1.2;
      default: return 1;
    }
  };

  const calculateTotal = () => {
    const basePrice = getPlanPrice();
    const deliveryFee = getDeliveryFee();
    const sizeAdjustment = getSizeMultiplier();
    
    let total = basePrice * sizeAdjustment + deliveryFee;
    return Math.round(total);
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-beige-100 to-beige-50 py-14">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Subscription Plans</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your Meal Plan
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Select from our flexible subscription options and customize your meal deliveries.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan Selection */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Select Your Plan</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'daily',
                      name: 'Daily',
                      description: 'One meal per day',
                      price: '₹149',
                      unit: 'per meal',
                      icon: <Clock className="h-6 w-6" />
                    },
                    {
                      id: 'weekly',
                      name: 'Weekly',
                      description: '7 meals per week',
                      price: '₹999',
                      unit: 'per week',
                      icon: <Calendar className="h-6 w-6" />
                    },
                    {
                      id: 'monthly',
                      name: 'Monthly',
                      description: '30 meals per month',
                      price: '₹3,599',
                      unit: 'per month',
                      icon: <Calendar className="h-6 w-6" />
                    }
                  ].map((plan) => (
                    <div
                      key={plan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? 'border-2 border-primary shadow-sm'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-full ${selectedPlan === plan.id ? 'bg-primary text-white' : 'bg-muted'}`}>
                          {plan.icon}
                        </div>
                        {selectedPlan === plan.id && (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <h3 className="font-medium">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{plan.description}</p>
                      <div>
                        <span className="text-lg font-semibold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground"> {plan.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Delivery Zone</h2>
                
                <RadioGroup 
                  value={selectedZone} 
                  onValueChange={setSelectedZone}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {[
                    {
                      id: 'central',
                      name: 'Central Mumbai',
                      areas: 'Dadar, Parel, Worli, Byculla',
                      fee: 'Free Delivery'
                    },
                    {
                      id: 'suburban',
                      name: 'Suburban Mumbai',
                      areas: 'Bandra to Borivali, Chembur to Ghatkopar',
                      fee: '₹29 Delivery Fee'
                    },
                    {
                      id: 'extended',
                      name: 'Extended Mumbai',
                      areas: 'Thane, Navi Mumbai, Mira Road',
                      fee: '₹49 Delivery Fee'
                    }
                  ].map((zone) => (
                    <div key={zone.id} className="relative">
                      <RadioGroupItem
                        value={zone.id}
                        id={zone.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={zone.id}
                        className={`border rounded-lg p-4 flex flex-col h-full cursor-pointer transition-all peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:shadow-sm hover:border-primary/50`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          {selectedZone === zone.id && (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <h3 className="font-medium">{zone.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{zone.areas}</p>
                        <div className="mt-auto">
                          <span className={`text-sm ${zone.id === 'central' ? 'text-secondary-foreground font-medium' : 'text-muted-foreground'}`}>
                            {zone.fee}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Customize Your Meals</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Spice Level</h3>
                      <div className="flex items-center text-sm gap-2">
                        <Flame className="h-4 w-4 text-primary" />
                        <span className="font-medium">{spiceLevel[0]}/5</span>
                      </div>
                    </div>

                    <Slider
                      value={spiceLevel}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={setSpiceLevel}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Mild</span>
                      <span>Medium</span>
                      <span>Spicy</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Meal Size</h3>
                    <RadioGroup 
                      value={mealSize} 
                      onValueChange={setMealSize}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="small" />
                        <Label htmlFor="small">Small (-15%)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regular" id="regular" />
                        <Label htmlFor="regular">Regular</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="large" />
                        <Label htmlFor="large">Large (+20%)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Customize Menu Weekly</h3>
                      <p className="text-sm text-muted-foreground">Choose specific meals for each day</p>
                    </div>
                    <Switch 
                      checked={customizeEnabled}
                      onCheckedChange={setCustomizeEnabled}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Selected Plan</span>
                      <span className="font-medium capitalize">{selectedPlan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Base Price</span>
                      <span>₹{getPlanPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meal Size</span>
                      <span className="capitalize">{mealSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Zone</span>
                      <span>
                        {selectedZone === 'central' && 'Central Mumbai'}
                        {selectedZone === 'suburban' && 'Suburban Mumbai'}
                        {selectedZone === 'extended' && 'Extended Mumbai'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>{getDeliveryFee() === 0 ? 'Free' : `₹${getDeliveryFee()}`}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-primary">₹{calculateTotal().toLocaleString()}</span>
                    </div>

                    <Button size="lg" className="w-full mt-4">
                      Subscribe Now
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      By subscribing, you agree to our Terms and Conditions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
