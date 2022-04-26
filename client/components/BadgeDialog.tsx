import { useState, useEffect } from "react";

import { Dialog } from "@reach/dialog";
import { Button, Card } from "react-bootstrap";

import "@reach/dialog/styles.css";

import pdfMake from "pdfmake/build/pdfmake";
import vfs from "../assets/fonts/vfs_fonts";

import { CmToPt } from "../helpers/CmToPt";
import { BadgeProps } from "../@types/BadgeProps";

export const BadgeDialog = ({ name, event, isOpen, onDismiss }: BadgeProps) => {
  pdfMake.vfs = vfs;

  pdfMake.fonts = {
    NimbusSans: {
      normal: "NimbusSanL-Reg.otf",
      bold: "NimbusSanL-Bol.otf",
      italics: "NimbusSanL-RegIta.otf",
      bolditalics: "NimbusSanL-BolIta.otf",
    },
  };

  const [url, setUrl] = useState();

  const badgePdf = {
    content: [
      {
        font: "NimbusSans",
        characterSpacing: 1,
        // layout: "lightHorizontalLines",
        table: {
          headerRows: 1,
          widths: [CmToPt(10)],
          heights: [CmToPt(8)],
          body: [
            [
              {
                text: `${name}`,
                bold: true,
                fontSize: 16,
                alignment: "center",
              },
            ],
            [
              {
                text: `${event}`,
                fontSize: 14,
                alignment: "center",
              },
            ],
          ],
        },
      },
    ],
    // content: [
    //   {
    //     text: `Hello!`,
    //     pageSize: { width: "40cm", height: "15cm" },
    //     fontSize: 16,
    //     bold: true,
    //     alignment: "center",
    //     font: "NimbusSans",
    //   },
    // ],
  };

  //@ts-ignore
  useEffect(() => {
    //@ts-ignore
    const pdf = pdfMake.createPdf(badgePdf);
    pdf.getBlob((blob) => {
      const pdfUrl = URL.createObjectURL(blob);
      //@ts-ignore
      setUrl(pdfUrl);
    });
    //@ts-ignore
  }, []);

  const handlePrintBadge = () => pdfMake.createPdf(badgePdf).print();

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} aria-labelledby="label">
      <Card>
        <embed
          src={url}
          style={{ width: "12cm", height: "8cm" }}
          type="application/pdf"
        />
        <Button onClick={handlePrintBadge} className="m-3">
          Imprimir
        </Button>
      </Card>
    </Dialog>
  );
};

export default BadgeDialog;
