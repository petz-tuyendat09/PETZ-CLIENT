/* eslint-disable @next/next/no-img-element */
"use client";
import { ModalProvider, useModal } from "./_store/ModalContext"; // Import the ModalProvider
import { useEffect } from "react";
import FormAddProductPrice from "./PriceAndStock/FormAddProductPrice";
import FormAddProductType from "./FormAddProductType";
import useAddProductForm from "./_hook/useAddProductForm";
import { useLazyGetSubCategoriesQuery } from "@/libs/features/services/subcategories";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import MyEditor from "./CKEditorComponent";
import FormAddProductThumbnail from "./ProductImage/FormAddProductThumbnail";
import GerneralInformation from "./GerneralInfor/GerneralInformation";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import NoActionModal from "@/components/ui/NoActionModal";

export default function FormAddProductWithContext() {
  return (
    <ModalProvider>
      <FormAddProduct />
    </ModalProvider>
  );
}

function FormAddProduct() {
  const { data: categories } = useGetCategoriesQuery("");
  const { modalText, modalDisplay } = useModal();

  const [getSubCategories, { data: subCategories }] =
    useLazyGetSubCategoriesQuery();
  const { formik, animalType, handleAnimalTypeChange, duplicatedMessage } =
    useAddProductForm();

  const router = useRouter();

  useEffect(() => {
    if (animalType) {
      getSubCategories({
        animalType: animalType,
        categoryId: formik.values.productCategory,
      });
    }
  }, [animalType, formik.values.productCategory, getSubCategories]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (modalDisplay) {
      timer = setTimeout(() => {
        router.push("/admin/shop");
      }, 5000);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalDisplay]);

  function handleButtonSubmit() {
    formik.handleSubmit();
  }

  return (
    <>
      <div className="mb-2 flex justify-between text-xl">
        <Link className="flex items-center gap-1" href="/admin/shop">
          <Icon icon="gravity-ui:arrow-left" />
          Quay về
        </Link>

        <button
          onClick={handleButtonSubmit}
          className="rounded-lg bg-black px-6 py-2 text-white"
        >
          Save
        </button>
      </div>
      <form encType="multipart/form-data">
        <div className="flex gap-8">
          <FormAddProductThumbnail formik={formik} />
          <div className="w-3/4">
            <GerneralInformation
              formik={formik}
              duplicatedMessage={duplicatedMessage}
            />

            <div className="mt-4 flex gap-4">
              <div className="h-fit w-1/2 rounded-[20px] bg-gray-50 p-4">
                <FormAddProductPrice
                  formik={formik}
                  errorMessage={formik.errors.productPrice}
                  visitedInput={formik.touched.productPrice}
                />
              </div>

              <div className="w-1/2 space-y-4 rounded-lg bg-gray-50 p-4">
                <FormAddProductType
                  visitedInput={formik.touched.productCategory}
                  errorMessage={formik.errors.productCategory}
                  onChangeEvent={formik.handleChange}
                  defaultText="Chọn danh mục"
                  inputName="productCategory"
                  optionValues={categories?.map((data) => (
                    <option key={data._id} value={data._id}>
                      {data.categoryName}
                    </option>
                  ))}
                />
                <FormAddProductType
                  visitedInput={formik.touched.animalType}
                  onChangeEvent={handleAnimalTypeChange}
                  defaultText="Chọn thú cưng"
                  inputName="animalType"
                  optionValues={
                    formik.values.productCategory && (
                      <>
                        <option value="Chó">Chó</option>
                        <option value="Mèo">Mèo</option>
                      </>
                    )
                  }
                />
                <FormAddProductType
                  visitedInput={formik.touched.productSubcategory}
                  errorMessage={formik.errors.productSubcategory}
                  onChangeEvent={formik.handleChange}
                  defaultText="Chọn danh mục con"
                  inputName="productSubcategory"
                  optionValues={subCategories?.map((data) => (
                    <option key={data._id} value={data._id}>
                      {data.subCategoryName}
                    </option>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
        <MyEditor formik={formik} />
      </form>
      <AnimatePresence>
        {modalDisplay && <NoActionModal modalText={modalText} />}
      </AnimatePresence>
    </>
  );
}
