import {RenderCredential} from "@truststack/credential-ui";
import {ModalCardScreen} from "@truststack/render-ui";
import {BarcodeScanner, Body, Headline, View, YStack} from "@truststack/ui";
import {useEffect, useState} from "react";

export const FETCH_URL = "/fetch-credential";

type FetchResponse = {
  readonly render: string;
};

export function AddCredentialScreen() {
  const [url, setUrl] = useState<string>("");
  const [render, setRender] = useState<string>("");

  useEffect(() => {
    if (!url) return;
    fetch(FETCH_URL)
      .then((res) => res.json())
      .then((data) => setRender(data.render));
  }, [url]);

  return (
    <ModalCardScreen>
      <YStack>
        <View margin={"$spacing.compact_margin"}>
          <Headline>Add Credential</Headline>
        </View>

        <YStack gap={12} justifyContent="center" alignItems="center">
          <BarcodeScanner
            margin={"auto"}
            onScan={(url) => {
              console.log(url);
              setUrl(url);
            }}
          />
          <Body>Scan QR Code to add credential</Body>
        </YStack>
      </YStack>

      {render && <RenderCredential render={render} />}
    </ModalCardScreen>
  );
}
