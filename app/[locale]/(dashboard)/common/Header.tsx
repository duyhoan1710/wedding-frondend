"use client";

import { AiOutlinePlus } from "react-icons/ai";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { ButtonCustom } from "@/components/common/Button";
import { InputCustom } from "@/components/common/Input";

import * as templateFetcher from "@/lib/fetchers/templates";
import { LIST_TEMPLATE_KEY } from "@/lib/hooks/queries/useTemplates";
import { EVersion } from "@/lib/enum";

export const Header = ({
  isDisplayCreateNewTemplate,
}: {
  isDisplayCreateNewTemplate: boolean;
}) => {
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
    version: yup.string().oneOf(Object.values(EVersion), "Invalid version"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { mutate: onSubmit, isPending } = useMutation({
    mutationFn: () =>
      templateFetcher.createTemplate({ ...getValues(), version: EVersion.V1 }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [LIST_TEMPLATE_KEY] });
      toast.success("Create template successfully");
      setIsOpen(false);
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  return (
    <div className="flex h-[72px] items-center justify-end border-b border-color-border px-4">
      {isDisplayCreateNewTemplate && (
        <>
          <ButtonCustom
            variant="bordered"
            color="primary"
            onClick={() => setIsOpen(true)}
          >
            <AiOutlinePlus />
            Create New
          </ButtonCustom>

          <Modal isOpen={isOpen}>
            <ModalContent>
              <ModalHeader>Create new Template</ModalHeader>
              <ModalBody>
                <InputCustom
                  placeholder="title"
                  {...register("title")}
                  error={errors.title?.message}
                />
              </ModalBody>
              <ModalFooter>
                <ButtonCustom
                  color="danger"
                  variant="flat"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </ButtonCustom>
                <ButtonCustom
                  color="primary"
                  onClick={handleSubmit(() => onSubmit())}
                  isLoading={isPending}
                  disabled={isPending}
                >
                  Save
                </ButtonCustom>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
};
