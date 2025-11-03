"use server"

import { jsPDF } from "jspdf"

export async function generateCVPDF() {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  let yPosition = 20

  // Set font sizes and styles
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("SIPHESIHLE MABONA", pageWidth / 2, yPosition, { align: "center" })

  yPosition += 15
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(
    "071 719 1025 | 3 Rissik St, Sunnyside, Pretoria, 0001 | Amlegendpercy@gmail.com",
    pageWidth / 2,
    yPosition,
    { align: "center" },
  )

  yPosition += 12
  doc.setLineWidth(0.5)
  doc.line(15, yPosition, pageWidth - 15, yPosition)

  // Personal Details Section
  yPosition += 8
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("PERSONAL DETAILS", 15, yPosition)

  yPosition += 10
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  const personalDetails = [
    "Date of Birth: 02/06/1995 | Age: 29",
    "Height: 179 cm | Waist: 34 | Shirt: M | Shoe: 8",
    "Hair: Black | Eyes: Brown | Ethnicity: African",
    "Driver's License: Yes | Passport: No",
  ]

  personalDetails.forEach((detail) => {
    doc.text(detail, 15, yPosition)
    yPosition += 6
  })

  // Training Section
  yPosition += 6
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("TRAINING", 15, yPosition)

  yPosition += 8
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("Introduction to Acting - The Market Theatre Lab (2018-2019)", 15, yPosition)
  yPosition += 6
  doc.text("Theatre and Performing Arts - Tshwane University of Technology (2021-2024)", 15, yPosition)

  // Film & Television Section
  yPosition += 10
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("FILM & TELEVISION", 15, yPosition)

  yPosition += 8
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("Grootboom and Sons (2021) - Support, Nyaope Boy", 15, yPosition)
  yPosition += 6
  doc.text("Opera Mini (2018) - Commercial", 15, yPosition)

  // Theatre Experience Section
  yPosition += 10
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("THEATRE EXPERIENCE", 15, yPosition)

  yPosition += 8
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  const theatreProductions = [
    "Their Fear (2022) - Directed by Lusapho Gqobo - Played Multiple Characters",
    "Ntombi Ka Zwelidumile (2022) - Directed by Lindiwe Mokoena - Played Malibongwe",
    "Little Red Riding Hood (2022) - Directed by Aqhama Ngozinza - Played The Narrator, Uncle",
    "The Lion and the Jewel (2023) - Directed by Siphesihle Mabona",
  ]

  theatreProductions.forEach((production) => {
    if (yPosition > pageHeight - 20) {
      doc.addPage()
      yPosition = 20
    }
    doc.text(production, 15, yPosition)
    yPosition += 7
  })

  // Skills Section
  yPosition += 8
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("SKILLS", 15, yPosition)

  yPosition += 8
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  const skills = ["Acting", "Directing", "Facilitating", "Voice Acting"]
  doc.text("Acting Skills: " + skills.join(", "), 15, yPosition)

  yPosition += 6
  doc.text("Languages: IsiXhosa (Native), IsiZulu (Fluent), Sesotho (Fluent), English (Fluent)", 15, yPosition)

  return doc.output("arraybuffer")
}
