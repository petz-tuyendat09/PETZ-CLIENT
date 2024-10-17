/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

interface errorsValues {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  selectedServices: string;
  bookingDate: string;
  bookingHours: string;
}

export default function useBookingForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      selectedServices: {},
      bookingDate: "",
      bookingHours: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors: Partial<errorsValues> = {};
      const hasSelectedService =
        Object.keys(values.selectedServices).length >= 0;

      const phoneRegex = /^[0-9]{10}$/;

      if (!values.customerName) {
        errors.customerName = "Vui lòng nhập tên ";
      }

      if (!values.customerPhone) {
        errors.customerPhone = "Vui lòng nhập thông tin liên hệ";
      }

      if (!phoneRegex.test(values.customerPhone)) {
        errors.customerPhone = "Vui lòng số điện thoại hợp lệ";
      }

      if (!values.customerEmail) {
        errors.customerEmail = "Vui lòng nhập Email";
      }

      if (!hasSelectedService) {
        errors.selectedServices = "Vui lòng chọn ít nhất 1 dịch vụ";
      }

      if (!values.bookingDate) {
        errors.bookingDate = "Vui lòng chọn ngày";
      }

      if (!values.bookingHours) {
        errors.bookingHours = "Vui lòng chọn giờ đặt lịch ";
      }

      return errors;
    },
  });

  //   useEffect(() => {
  //     if (mutationError && "data" in mutationError) {
  //       setDuplicatedMessage((mutationError.data as any).message);
  //     }
  //     if (mutationResponse) {
  //       setModalDisplay(true); // Show modal on successful product addition
  //       setModalText("Thêm sản phẩm thành công quay về sau 3s");
  //     }
  //   }, [mutationError, mutationResponse]);

  //   useEffect(() => {
  //     if (formik.values.productName) {
  //       setDuplicatedMessage(undefined);
  //     }
  //   }, [formik.values.productName]);

  return {
    formik,
  };
}