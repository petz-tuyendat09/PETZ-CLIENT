import { useState } from "react";
import { useFormik } from "formik";
import NoImg from "@@/assets/images/no-img.jpg";

import { useAddNewProductMutation } from "@/libs/features/services/product";
import { useRouter } from "next/navigation";

interface errorsValues {
  productName: string;
  productThumbail: string;
  productImage: string;
  productPrice: string;
  salePercent: string;
  productQuantity: string;
  productCategory: string;
  productSubcategory: string;
  animalType: string;
  productDescription: string;
}

export default function useAddProductForm() {
  const [imagePreview, setImagePreview] = useState(NoImg.src);
  const [animalType, setAnimalType] = useState<string>("");

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue("productThumbnail", file);
    }
  }

  const handleAnimalTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const animalTypeSelected = e.target.value;
    setAnimalType(animalTypeSelected);
    formik.setFieldValue("productSubcategory", animalTypeSelected);
  };
  const [addNewProduct, { data, error: mutationError }] =
    useAddNewProductMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      productName: "",
      productThumbnail: null,
      productImages: [],
      productPrice: 0,
      salePercent: 0,
      productQuantity: 0,
      productCategory: "",
      productSubcategory: "",
      animalType: "",
      productDescription: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null) {
          if (Array.isArray(value)) {
            value.forEach((item) => formData.append(key, item));
          } else if (typeof value === "number") {
            formData.append(key, value.toString());
          } else {
            formData.append(key, value);
          }
        }
      });
      // console.log(formData);
      addNewProduct(formData);
    },
    validate: (values) => {
      let errors: Partial<errorsValues> = {};

      if (!values.productName) {
        errors.productName = "Required name";
      }
      if (values.productPrice === 0 || !values.productPrice) {
        errors.productPrice = "Required price";
      }
      if (values.productQuantity === 0) {
        errors.productQuantity = "Required quantity";
      }

      if (!values.productCategory) {
        errors.productCategory = "Required";
      }
      if (!values.productSubcategory) {
        errors.productSubcategory = "Required";
      }

      return errors;
    },
  });

  // let duplicatedMessage;

  // if (data) {
  //   if (data.message === "Duplicated product name") {
  //     duplicatedMessage = "Duplicated product name";
  //   }
  // }

  // useEffect(() => {
  //   if (data && data.status === 201) {
  //     router.push("/admin/shop");
  //   }
  // }, [data, router]);

  return {
    formik,
    imagePreview,
    handleImageChange,
    animalType,
    handleAnimalTypeChange,
    // duplicatedMessage
  };
}