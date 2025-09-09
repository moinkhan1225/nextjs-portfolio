"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Mail } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner"; // ✅ import toast

const timeSlots = [
  "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM",
  "4:00 PM","4:30 PM",
];

export default function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", notes: "",
  });

  const [isBooking, setIsBooking] = useState(false);

  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  function convertTo24Hour(time) {
    const [t, modifier] = time.split(" ");
    let [hours, minutes] = t.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setIsBooking(true);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      date: selectedDate.toISOString().split("T")[0],
      time: convertTo24Hour(selectedTime),
      notes: formData.notes,
      phone: formData.phone,
    };
try {
  const res = await fetch("/api/book-appointment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to book appointment");

  toast.success("Appointment Confirmed ✅", {
    description: `A confirmation email has been sent to ${formData.email}.`,
  });

  // Reset form
  setFormData({ firstName: "", lastName: "", email: "", phone: "", notes: "" });
  setSelectedDate(null);
  setSelectedTime(null);
} catch (error) {
  console.error("Booking error:", error);
  toast.error("Booking Failed ❌", {
    description: error.message,
  });
} finally {
  setIsBooking(false);
}
  };

  return (
    <section className="relative isolate py-16 sm:py-20" id="contact">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/25 via-fuchsia-500/10 to-blue-500/25 opacity-70 blur-3xl" />
      </div>

      <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:mx-0">
        <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white">Schedule a Meeting</h2>
            <p className="mt-2 text-gray-300">Choose a date and time that works best for you.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Date & Time Selection */}
            <div className="w-full">
              <Card className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <CalendarIcon className="h-5 w-5" />
                    Select Date & Time
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Choose your preferred appointment slot
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-2 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
                            !selectedDate && "text-gray-200"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0 || date.getDay() === 6
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {selectedDate && (
                    <div>
                      <Label className="text-white">Available Times</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition",
                              selectedTime === time && "bg-white/30 border-white"
                            )}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Form */}
            <div className="w-full">
              <Card className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Mail className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Please provide your details for the appointment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number (with country code)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-white">Additional Notes (Requirements)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any specific requirements or questions..."
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        className="min-h-[100px] bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 rounded-lg"
                      />
                    </div>

                    {selectedDate && selectedTime && (
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                        <h4 className="font-medium mb-2">Appointment Summary</h4>
                        <div className="space-y-1 text-sm text-gray-300">
                          <p><strong>Date:</strong> {format(selectedDate, "PPP")}</p>
                          <p><strong>Time:</strong> {selectedTime} - IST</p>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition rounded-lg flex justify-center items-center"
                      disabled={
                        !selectedDate || !selectedTime ||
                        !formData.firstName || !formData.lastName ||
                        !formData.email || !formData.phone || isBooking
                      }
                    >
                      {isBooking && (
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                      )}
                      {isBooking ? "Booking..." : "Book Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
