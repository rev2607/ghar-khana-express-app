
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Meal {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  type: 'Veg' | 'Non-Veg' | 'Jain';
  diet: string[];
  region: 'North Indian' | 'South Indian' | 'Maharashtrian';
  spiceLevel: number;
  ingredients: string[];
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const MenuPage: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<{
    type: string[];
    diet: string[];
    region: string[];
  }>({
    type: [],
    diet: [],
    region: []
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Sample menu data
  const meals: Meal[] = [
    {
      id: 1,
      name: "Butter Chicken with Naan",
      description: "Tender chicken in a rich, creamy tomato sauce served with fresh baked naan.",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "Non-Veg",
      diet: ["High Protein"],
      region: "North Indian",
      spiceLevel: 2,
      ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Spices", "Flour"],
      macros: { calories: 550, protein: 32, carbs: 38, fat: 28 }
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese cubes in a spiced tomato gravy, a vegetarian delight.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1596797038534-2316ff0c56b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      type: "Veg",
      diet: ["High Protein", "Keto"],
      region: "North Indian",
      spiceLevel: 3,
      ingredients: ["Paneer", "Tomatoes", "Capsicum", "Onion", "Spices"],
      macros: { calories: 420, protein: 22, carbs: 20, fat: 28 }
    },
    {
      id: 3,
      name: "Masala Dosa",
      description: "Crispy rice and lentil crepe filled with spiced potatoes, served with sambhar and chutney.",
      price: "₹160",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "Veg",
      diet: ["Diabetic Friendly"],
      region: "South Indian",
      spiceLevel: 2,
      ingredients: ["Rice", "Lentils", "Potatoes", "Onions", "Mustard seeds", "Curry leaves"],
      macros: { calories: 380, protein: 10, carbs: 62, fat: 12 }
    },
    {
      id: 4,
      name: "Varan Bhaat with Toop",
      description: "Simple yet delicious Maharashtrian style dal and rice with ghee.",
      price: "₹130",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "Veg",
      diet: ["Diabetic Friendly", "Jain"],
      region: "Maharashtrian",
      spiceLevel: 1,
      ingredients: ["Toor Dal", "Rice", "Ghee", "Mustard seeds", "Cumin", "Turmeric"],
      macros: { calories: 320, protein: 12, carbs: 58, fat: 8 }
    },
    {
      id: 5,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.",
      price: "₹240",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "Non-Veg",
      diet: ["High Protein"],
      region: "South Indian",
      spiceLevel: 4,
      ingredients: ["Basmati rice", "Chicken", "Onions", "Tomatoes", "Yogurt", "Spices"],
      macros: { calories: 590, protein: 38, carbs: 62, fat: 22 }
    },
    {
      id: 6,
      name: "Puran Poli",
      description: "Sweet flatbread stuffed with a lentil and jaggery mixture, a Maharashtrian specialty.",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "Veg",
      diet: ["Jain"],
      region: "Maharashtrian",
      spiceLevel: 0,
      ingredients: ["Chana Dal", "Jaggery", "Wheat flour", "Cardamom", "Ghee"],
      macros: { calories: 480, protein: 8, carbs: 72, fat: 16 }
    }
  ];

  const toggleFilter = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => {
      const current = [...prev[category]];
      const index = current.indexOf(value);
      
      if (index === -1) {
        // Add the filter
        return {
          ...prev,
          [category]: [...current, value]
        };
      } else {
        // Remove the filter
        current.splice(index, 1);
        return {
          ...prev,
          [category]: current
        };
      }
    });
  };

  const resetFilters = () => {
    setActiveFilters({
      type: [],
      diet: [],
      region: []
    });
    setSearchQuery('');
  };

  const filteredMeals = meals.filter(meal => {
    // Apply search query filter
    if (searchQuery && !meal.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply type filter
    if (activeFilters.type.length > 0 && !activeFilters.type.includes(meal.type)) {
      return false;
    }
    
    // Apply diet filter
    if (activeFilters.diet.length > 0 && !activeFilters.diet.some(diet => meal.diet.includes(diet))) {
      return false;
    }
    
    // Apply region filter
    if (activeFilters.region.length > 0 && !activeFilters.region.includes(meal.region)) {
      return false;
    }
    
    return true;
  });

  return (
    <div>
      <div className="bg-gradient-to-br from-beige-100 to-beige-50 py-14">
        <div className="container">
          <div className="text-center">
            <Badge className="mb-4">Explore Our Offerings</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Delicious Menu
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Browse our wide range of home-cooked meals prepared with fresh ingredients and authentic recipes.
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search meals..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-card shadow-sm rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Filters</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Meal Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Veg', 'Non-Veg', 'Jain'].map((type) => (
                      <Badge
                        key={type}
                        variant={activeFilters.type.includes(type) ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => toggleFilter('type', type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Dietary Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Keto', 'Diabetic Friendly', 'High Protein', 'Jain'].map((diet) => (
                      <Badge
                        key={diet}
                        variant={activeFilters.diet.includes(diet) ? 'secondary' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => toggleFilter('diet', diet)}
                      >
                        {diet}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Region</h3>
                  <div className="flex flex-wrap gap-2">
                    {['North Indian', 'South Indian', 'Maharashtrian'].map((region) => (
                      <Badge
                        key={region}
                        variant={activeFilters.region.includes(region) ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => toggleFilter('region', region)}
                      >
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="flex-1">
            {filteredMeals.length === 0 ? (
              <div className="text-center py-20">
                <Utensils className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                <h3 className="mt-4 text-lg font-medium">No meals match your filters</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMeals.map((meal) => (
                  <Card key={meal.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
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
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${i < meal.spiceLevel ? 'bg-primary' : 'bg-white/70'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="mb-2">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium">{meal.name}</h3>
                          <span className="font-semibold text-primary whitespace-nowrap ml-2">{meal.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{meal.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1 mb-2">
                        {meal.diet.map((diet) => (
                          <Badge key={diet} variant="outline" className="text-xs px-1 py-0">
                            {diet}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {meal.region}
                        </Badge>
                      </div>
                      <div className="mt-auto pt-2 border-t">
                        <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                          <span>Calories: {meal.macros.calories}</span>
                          <span>P: {meal.macros.protein}g</span>
                          <span>C: {meal.macros.carbs}g</span>
                          <span>F: {meal.macros.fat}g</span>
                        </div>
                        <Button size="sm" className="w-full">Add to Plan</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
