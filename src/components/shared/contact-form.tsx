"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { toast } from "sonner";
import { IOptions } from "@/interfaces/form.interface";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username @ bilan boshlanishi kerak.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Xabar 10 belgidan kam bo'lmasligi kerak.",
    })
    .max(160, {
      message: "Xabar 160 belgidan kam bo'lishi kerak.",
    }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let my_text = `- <b>User:</b> <u>${
      values.username
    } </u>%0A- <b>Xabari:</b> <pre>${values.message.replace(
      /\\n/g,
      "\n"
    )}</pre>`;
    let token = "6703350714:AAGVO6L9Fg2fc1fDF5oA2if4r4-CkH2WRnk";
    let chat_id = 843790385;
    let url = `https://api.telegram.org/bot${token}/sendMessage`;
    let data = {
      chat_id,
      text: my_text,
      parse_mode: "html",
    };

    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        form.reset();
        const timestampInSeconds = res?.data?.result?.date;
        const timestampInMilliseconds = timestampInSeconds * 1000;

        const date = new Date(timestampInMilliseconds);

        const options: IOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };

        const formattedDate = date.toLocaleString("en-US", options);

        toast("Muvaffaqiyatli yuborildi!!", {
          description: `${formattedDate}`,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast("Xatolik yuz berdi", {
        description: `Qayta urinib ko'ring `,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telegram username</FormLabel>
              <FormControl className="">
                <Input placeholder="@username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Xabaringiz</FormLabel>
              <FormControl className="">
                <Textarea placeholder="Xabaringiz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Yuborish</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
