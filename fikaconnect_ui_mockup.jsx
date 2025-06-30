import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Truck, CheckCircle, Phone, User, List, Search, LogOut, Menu } from "lucide-react";

export default function FikaConnectApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 p-4 md:p-6">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center bg-green-800 text-white p-4 rounded-xl shadow mb-6">
        <div className="flex items-center gap-2">
          <Menu />
          <h1 className="text-2xl font-bold">FikaConnect</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="text-white border-white hover:bg-green-700">
            <User className="mr-2" /> Login
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-green-700">
            <List className="mr-2" /> Bookings
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-green-700">
            <LogOut className="mr-2" /> Logout
          </Button>
        </div>
      </div>

      {/* Search & Booking Form */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="shadow-xl border-green-300 col-span-2">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-semibold text-green-800 flex items-center gap-2">
              <MapPin className="text-green-600" /> Book Transport
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Pickup Location</Label>
                <Input placeholder="e.g. Gomba" />
              </div>
              <div>
                <Label>Destination</Label>
                <Input placeholder="e.g. Mpigi" />
              </div>
              <div className="md:col-span-2">
                <Label>Goods Description</Label>
                <Input placeholder="e.g. 20 bags of maize" />
              </div>
            </div>
            <Button className="w-full bg-green-700 hover:bg-green-800 mt-4">
              <Search className="mr-2" /> Find Available Trucks
            </Button>
          </CardContent>
        </Card>

        {/* Truck Match Summary */}
        <Card className="shadow-xl border-green-300">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-semibold text-green-800 flex items-center gap-2">
              <Truck className="text-green-600" /> Matched Truck
            </h2>
            <p><strong>Driver:</strong> John Kintu</p>
            <p><strong>Truck Type:</strong> Canter (3 tons)</p>
            <p><strong>Route:</strong> Gomba ➜ Mpigi</p>
            <p><strong>Contact:</strong> <Phone className="inline-block w-4 h-4 mr-1" /> +256 712 XXX XXX</p>
            <Button variant="outline" className="w-full border-green-700 text-green-800 hover:bg-green-100">
              Book This Truck <CheckCircle className="inline-block ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer Section */}
      <div className="mt-10 text-center text-sm text-green-700">
        © {new Date().getFullYear()} FikaConnect. Powered by innovation for rural logistics.
      </div>
    </div>
  );
}
