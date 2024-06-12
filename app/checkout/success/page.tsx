"use client";
import React from "react";
import Logo from "@/components/Header/logo";
import Constructor from "@/Constructor";
import * as S from "./styles";
import { Hearts } from "react-loader-spinner";
import { themeColors } from "@/styles/COLORS";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Constructor>
        <S.Container>
          <S.Content>
            <Logo />
          </S.Content>
          <S.Content>
            <S.Text>
              <h3>
                Em breve você receberá um email com a confirmação de pagamento.
              </h3>
              <h5>
                Muito obrigado por ter escolhido a gente! <br />
                Pra nós gente é uma satisfação imensa ser parte da sua vida,
                obrigado! Temos muito orgulho dessa nossa parceria, conte sempre
                com a gente! Estamos ansiosos por vê-lo novamente, obrigado por
                contar com a gente!
              </h5>
            </S.Text>
            <Hearts color={themeColors.warning} />
          </S.Content>
        </S.Container>
      </Constructor>
    </>
  );
}
