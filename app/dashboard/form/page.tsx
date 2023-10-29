import { ExperienceForm } from "@/components/form-components/experience.form";
import { NotificationsForm } from "@/components/form-components/notifications.form";

export default function UserExperience() {
  return (
    <main className="flex flex-col">
      <ExperienceForm />

      {/* FIXME: not fit here may need to add someplace else  */}
      {/* <NotificationsForm/> */}
    </main>
  );
}
