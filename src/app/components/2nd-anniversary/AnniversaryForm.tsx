"use client"
import {
  anniversaryAction,
  FormState
} from "@/app/utils/actions/anniversaryAction"
import { CheckIcon } from "@heroicons/react/24/solid"
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  toast
} from "@heroui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { startTransition, useActionState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useLocalStorage } from "usehooks-ts"

const formSchema = z.object({
  name: z.string().min(1, "نام را وارد کنید").regex(/^[a-zA-Z0-9\s]+$/, "نام باید شامل حروف و اعداد انگلیسی باشد"),
  movies: z.string().min(1, "فیلد را خالی نگذارید").max(4000, "شما از تعداد کاراکتر های مجاز فراتر رفتید"),
  shows: z.string().min(1, "فیلد را خالی نگذارید").max(4000, "شما از تعداد کاراکتر های مجاز فراتر رفتید"),
  description: z.string().max(5000, 'توضیحات شما بیش از حد مجاز است').nullable()
})

type FormValues = z.infer<typeof formSchema>

const initialState: FormState = { errors: {}, message: "" }
const AnniversaryForm = () => {
  const [formSubmitted, setFormSubmitted] = useLocalStorage(
    "anniversaryFormSubmitted",
    "false",
    {
      initializeWithValue: false
    }
  )
  const [state, formAction, isPending] = useActionState(
    anniversaryAction,
    initialState
  )

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  })

  useEffect(() => {
    if (state.errors?.name) {
      setError("name", { type: "server", message: state.errors.name[0] })
    }
    if (state.errors?.movies) {
      setError("movies", { type: "server", message: state.errors.movies[0] })
    }
    if (state.errors?.shows) {
      setError("shows", { type: "server", message: state.errors.shows[0] })
    }
    if (state.errors?.description) {
      setError("description", { type: "server", message: state.errors.description[0] })
    }
  }, [state.errors, setError])

  useEffect(() => {
    if (isPending == false) {
      if (state.success == true) {
        setFormSubmitted("true")
        toast.success("اطلاعات با موفقیت ارسال شد", {
          actionProps: {
            className: "bg-success text-success-foreground"
          },
          description:
            "منتظر تایید اطلاعات باشید، تا چند ساعت آینده روی سایت قرار میگیره"
        })
      } else if (state.success == false) {
        toast.danger("در ارسال اطلاعات مشکلی به وجود آمد", {
          actionProps: {
            variant: "danger"
          },
          description: "لطفا دوباره تلاش کنید"
        })
      }
    }
  }, [isPending, state, setFormSubmitted])

  const onSubmit = (data: FormValues) => {
    clearErrors()
    const formData = new FormData()
    formData.set("name", data.name)
    formData.set("movies", data.movies)
    formData.set("shows", data.shows)
    data.description  && formData.set("description", data.description)

    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-2 rounded-2xl border border-[#3b3b3b] px-16 py-8 max-lg:px-8 max-lg:py-4 bg-[#0d0c0f]"
    >
      <TextField
        isInvalid={Boolean(errors.name)}
        isRequired
        name="name"
        type="name"
      >
        <Label className="text-[#9299A0]">نام نمایشی</Label>
        <Input
          className="p-3 border border-[#1C1B1F]"
          placeholder="نام نمایشی شما در سایت"
          {...register("name")}
        />
        {errors.name ? (
          <FieldError>{errors.name.message}</FieldError>
        ) : (
          <Description>از نام لاتین استفاده کنید ،نام های بی معنی و مزخرف قبول نمیشن</Description>
        )}
      </TextField>
      <TextField
        isInvalid={Boolean(errors.movies)}
        isRequired
        name="movies"
        type="text"
      >
        <Label className="text-[#9299A0]">فیلم</Label>
        <Input
          className="p-3 border border-[#1C1B1F]"
          placeholder="فیلم های مورد علاقه شما"
          {...register("movies")}
        />
        {errors.movies ? (
          <FieldError>{errors.movies.message}</FieldError>
        ) : (
          <Description>حداکثر 5 فیلم (اگه فیلمی ندارید - بزارید)</Description>
        )}
      </TextField>
      <TextField
        isInvalid={Boolean(errors.shows)}
        isRequired
        name="shows"
        type="text"
      >
        <Label className="text-[#9299A0]">سریال</Label>
        <Input
          className="p-3 border border-[#1C1B1F]"
          placeholder="سریال های مورد علاقه شما"
          {...register("shows")}
        />
        {errors.shows ? (
          <FieldError>{errors.shows.message}</FieldError>
        ) : (
          <Description>حداکثر 5 سریال (اگه سریالی ندارید - بزارید)</Description>
        )}
      </TextField>

      <TextField
        isInvalid={Boolean(errors.description)}
        name="description"
        type="text"
      >
        <Label className="text-[#9299A0]">توضیحات</Label>
        <TextArea
          className="p-3 border border-[#1C1B1F] resize-none"
          placeholder="توضیحات"
          {...register("description")}
        />
        {errors.description ? (
          <FieldError>{errors.description.message}</FieldError>
        ) : (
          <Description>اگه توضیحی درباره لیست یا پروژه دارید بنویسید</Description>
        )}
      </TextField>

      <Button isDisabled={isPending || formSubmitted === "true"} type="submit">
        {formSubmitted === "true" ? (
          "درخواست شما با موفقیت ثبت شد"
        ) : (
          <>
            <CheckIcon />
            ثبت اطلاعات
          </>
        )}
      </Button>
    </form>
  )
}
export default AnniversaryForm
