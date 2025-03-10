import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClassSchedule() {
  return (
    <section id="classes" className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">Class Schedule</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
          Find the perfect class for your schedule and skill level
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Ballet</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Beginner</span>
                <span>Mon & Wed 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Intermediate</span>
                <span>Tue & Thu 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Advanced</span>
                <span>Fri 7:00 PM</span>
              </div>
            </div>
            <Button className="mt-4 w-full">Register</Button>
          </div>

          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Contemporary</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Beginner</span>
                <span>Tue & Thu 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Intermediate</span>
                <span>Mon & Wed 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Advanced</span>
                <span>Sat 10:00 AM</span>
              </div>
            </div>
            <Button className="mt-4 w-full">Register</Button>
          </div>

          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Hip Hop</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Beginner</span>
                <span>Wed & Fri 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Intermediate</span>
                <span>Tue & Thu 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Advanced</span>
                <span>Sat 12:00 PM</span>
              </div>
            </div>
            <Button className="mt-4 w-full">Register</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

