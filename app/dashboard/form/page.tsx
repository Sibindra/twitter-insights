import { FeedbackForm } from "@/components/form-components/feedback.form";
import { NotificationsForm } from "@/components/form-components/notifications.form";

export default function UserExperience() {
  return (
    <main className="flex flex-col">
      <FeedbackForm />

      {/* FIXME: not fit here may need to add someplace else  */}
      {/* <NotificationsForm/> */}
    </main>
  );
}
