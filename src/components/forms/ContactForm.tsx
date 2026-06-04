"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  type: z.enum(["기관수업 문의", "자격과정 문의", "교재 문의", "기타 문의"]),
  name: z.string().min(1, "이름을 입력해 주세요."),
  organization: z.string().optional(),
  phone: z.string().min(8, "연락처를 입력해 주세요."),
  email: z.string().email("이메일 형식을 확인해 주세요.").optional().or(z.literal("")),
  region: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "문의 내용을 10자 이상 입력해 주세요."),
  privacy: z.boolean().refine((value) => value, "개인정보 수집에 동의해 주세요.")
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const defaultType = searchParams.get("type") === "institution" ? "기관수업 문의" : searchParams.get("type") === "book" ? "교재 문의" : "자격과정 문의";
  const defaultInterest = searchParams.get("interest") ?? "";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: defaultType,
      interest: defaultInterest,
      privacy: false
    }
  });

  useEffect(() => {
    setValue("type", defaultType);
    setValue("interest", defaultInterest);
  }, [defaultInterest, defaultType, setValue]);

  function onSubmit(data: FormValues) {
    console.log("KMLA contact inquiry", data);
    setSubmitted(true);
    reset({ type: defaultType, interest: defaultInterest, privacy: false });
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit(onSubmit)}>
      {submitted ? <div className="form-success">문의가 접수되었습니다. 확인 후 연락드리겠습니다.</div> : null}
      <label>
        문의 유형
        <select {...register("type")}>
          <option>기관수업 문의</option>
          <option>자격과정 문의</option>
          <option>교재 문의</option>
          <option>기타 문의</option>
        </select>
      </label>
      <div className="form-grid-2">
        <label>
          이름
          <input {...register("name")} placeholder="홍길동" />
          {errors.name ? <span>{errors.name.message}</span> : null}
        </label>
        <label>
          연락처
          <input {...register("phone")} placeholder="010-0000-0000" />
          {errors.phone ? <span>{errors.phone.message}</span> : null}
        </label>
      </div>
      <div className="form-grid-2">
        <label>
          기관명
          <input {...register("organization")} placeholder="선택 입력" />
        </label>
        <label>
          이메일
          <input {...register("email")} placeholder="선택 입력" />
          {errors.email ? <span>{errors.email.message}</span> : null}
        </label>
      </div>
      <div className="form-grid-2">
        <label>
          지역
          <input {...register("region")} placeholder="예: 서울, 경기" />
        </label>
        <label>
          희망 악기 또는 과정
          <input {...register("interest")} placeholder="예: 칼림바, 융합수업" />
        </label>
      </div>
      <label>
        문의 내용
        <textarea {...register("message")} rows={6} placeholder="문의 내용을 입력해 주세요." />
        {errors.message ? <span>{errors.message.message}</span> : null}
      </label>
      <label className="checkbox-label">
        <input type="checkbox" {...register("privacy")} />
        <span>문의 응대를 위한 개인정보 수집에 동의합니다. 실제 운영 전 개인정보 처리방침 문구를 확인해 주세요.</span>
      </label>
      {errors.privacy ? <p className="form-error">{errors.privacy.message}</p> : null}
      <button className="button button-primary" type="submit">
        문의 보내기
        <Send size={17} />
      </button>
    </form>
  );
}
