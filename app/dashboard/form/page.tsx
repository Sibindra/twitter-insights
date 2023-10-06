import { ExperienceForm } from "@/components/forms/experience.form";
import { NotificationsForm } from "@/components/forms/notifications.form";

export default function UserExperience() {
  return <main className="flex flex-col">
    <ExperienceForm/>
    <NotificationsForm/>
  </main>;
}
