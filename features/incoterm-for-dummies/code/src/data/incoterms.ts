import { Incoterm } from "@/types";

export const incoterms: Incoterm[] = [
  // === ANY MODE INCOTERMS ===
  {
    code: "EXW",
    fullName: "Ex Works",
    transportMode: "any",
    keyPoint: "Minimum seller obligation - buyer takes all risk from seller's premises",
    description:
      "Ex Works means the seller delivers when it places the goods at the disposal of the buyer at the seller's premises or another named place (works, factory, warehouse, etc.). The seller does not need to load the goods on any collecting vehicle, nor does it need to clear the goods for export, where such clearance is applicable.",
    whenToUse: [
      "When buyer has strong logistics capabilities in seller's country",
      "For domestic transactions where export is not involved",
      "When buyer wants maximum control over shipping",
      "When seller has limited export experience",
    ],
    commonMistakes: [
      "Seller failing to assist with export clearance when needed",
      "Buyer underestimating logistics complexity in foreign country",
      "Not clarifying who loads goods onto transport vehicle",
      "Using for international trade without proper export documentation",
    ],
    riskTransferPoint: 5,
    costTransferPoint: 5,
    sellerResponsibilities: [
      { id: "exw-s1", label: "Packaging", description: "Package goods appropriately for collection" },
      { id: "exw-s2", label: "Marking", description: "Mark goods for identification" },
      { id: "exw-s3", label: "Notice", description: "Notify buyer when goods are available" },
    ],
    buyerResponsibilities: [
      { id: "exw-b1", label: "Collection", description: "Collect goods from seller's premises" },
      { id: "exw-b2", label: "Loading", description: "Load goods onto transport vehicle" },
      { id: "exw-b3", label: "Export Clearance", description: "Handle all export formalities" },
      { id: "exw-b4", label: "Main Carriage", description: "Arrange and pay for all transportation" },
      { id: "exw-b5", label: "Import Clearance", description: "Handle all import formalities" },
      { id: "exw-b6", label: "Duties & Taxes", description: "Pay all duties and taxes" },
      { id: "exw-b7", label: "Insurance", description: "Arrange insurance if desired" },
    ],
  },
  {
    code: "FCA",
    fullName: "Free Carrier",
    transportMode: "any",
    keyPoint: "Seller delivers to carrier at named place - most versatile term",
    description:
      "Free Carrier means the seller delivers the goods to the carrier or another person nominated by the buyer at the seller's premises or another named place. The parties are well advised to specify as clearly as possible the point within the named place of delivery, as risk passes to the buyer at that point.",
    whenToUse: [
      "For containerized cargo and multimodal transport",
      "When goods are delivered to a terminal or transport hub",
      "As a modern replacement for FOB when not using sea transport",
      "When buyer nominates their own carrier",
    ],
    commonMistakes: [
      "Not specifying exact delivery point clearly",
      "Confusion about loading responsibilities at different locations",
      "Using FOB when FCA is more appropriate for containers",
      "Not obtaining on-board bill of lading when required for letter of credit",
    ],
    riskTransferPoint: 15,
    costTransferPoint: 15,
    sellerResponsibilities: [
      { id: "fca-s1", label: "Packaging", description: "Package goods for transport" },
      { id: "fca-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "fca-s3", label: "Delivery", description: "Deliver to carrier at named place" },
      { id: "fca-s4", label: "Loading (at premises)", description: "Load onto carrier if at seller's premises" },
    ],
    buyerResponsibilities: [
      { id: "fca-b1", label: "Main Carriage", description: "Arrange and pay for main transport" },
      { id: "fca-b2", label: "Unloading (at premises)", description: "Unload if delivered at seller's premises" },
      { id: "fca-b3", label: "Import Clearance", description: "Handle import formalities" },
      { id: "fca-b4", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "fca-b5", label: "Insurance", description: "Arrange insurance if desired" },
    ],
  },
  {
    code: "CPT",
    fullName: "Carriage Paid To",
    transportMode: "any",
    keyPoint: "Seller pays for carriage but risk transfers at handover to first carrier",
    description:
      "Carriage Paid To means the seller delivers the goods to the carrier or another person nominated by the seller at an agreed place and that the seller must contract for and pay the costs of carriage necessary to bring the goods to the named place of destination. Risk transfers when goods are handed to the first carrier.",
    whenToUse: [
      "When seller can negotiate better freight rates",
      "For multimodal transport to inland destinations",
      "When buyer wants delivered pricing but accepts transit risk",
      "As CFR equivalent for non-sea shipments",
    ],
    commonMistakes: [
      "Confusing risk transfer point with delivery point",
      "Buyer not arranging insurance for transit",
      "Not specifying destination clearly",
      "Assuming seller bears risk until destination",
    ],
    riskTransferPoint: 20,
    costTransferPoint: 75,
    sellerResponsibilities: [
      { id: "cpt-s1", label: "Packaging", description: "Package goods for transport" },
      { id: "cpt-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "cpt-s3", label: "Main Carriage", description: "Contract and pay for carriage to destination" },
      { id: "cpt-s4", label: "Delivery", description: "Deliver to first carrier" },
    ],
    buyerResponsibilities: [
      { id: "cpt-b1", label: "Risk from Handover", description: "Bear risk from handover to first carrier" },
      { id: "cpt-b2", label: "Import Clearance", description: "Handle import formalities" },
      { id: "cpt-b3", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "cpt-b4", label: "Insurance", description: "Arrange insurance (recommended)" },
      { id: "cpt-b5", label: "Unloading", description: "Unload at destination" },
    ],
  },
  {
    code: "CIP",
    fullName: "Carriage and Insurance Paid To",
    transportMode: "any",
    keyPoint: "Like CPT but seller must provide insurance coverage",
    description:
      "Carriage and Insurance Paid To means the seller delivers the goods to the carrier, pays for carriage to the named destination, and must obtain insurance against the buyer's risk of loss or damage during carriage. Under Incoterms 2020, CIP requires 'all risks' insurance coverage (ICC A or equivalent).",
    whenToUse: [
      "When buyer requires seller to provide insurance",
      "For high-value goods requiring comprehensive coverage",
      "When seller can obtain better insurance rates",
      "As CIF equivalent for non-sea transport",
    ],
    commonMistakes: [
      "Not providing adequate insurance coverage level",
      "Confusion about who benefits from insurance claim",
      "Not understanding ICC A vs ICC C coverage requirements",
      "Forgetting insurance is minimum only - buyer may need more",
    ],
    riskTransferPoint: 20,
    costTransferPoint: 80,
    sellerResponsibilities: [
      { id: "cip-s1", label: "Packaging", description: "Package goods for transport" },
      { id: "cip-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "cip-s3", label: "Main Carriage", description: "Contract and pay for carriage to destination" },
      { id: "cip-s4", label: "Insurance", description: "Obtain 'all risks' insurance (ICC A or equivalent)" },
      { id: "cip-s5", label: "Delivery", description: "Deliver to first carrier" },
    ],
    buyerResponsibilities: [
      { id: "cip-b1", label: "Risk from Handover", description: "Bear risk from handover to first carrier" },
      { id: "cip-b2", label: "Import Clearance", description: "Handle import formalities" },
      { id: "cip-b3", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "cip-b4", label: "Unloading", description: "Unload at destination" },
    ],
  },
  {
    code: "DAP",
    fullName: "Delivered at Place",
    transportMode: "any",
    keyPoint: "Seller delivers ready for unloading at named destination",
    description:
      "Delivered at Place means the seller delivers when the goods are placed at the disposal of the buyer on the arriving means of transport ready for unloading at the named place of destination. The seller bears all risks involved in bringing the goods to the named place. Buyer handles import clearance.",
    whenToUse: [
      "When seller wants to control delivery to final destination",
      "For door-to-door delivery without import clearance",
      "When buyer cannot handle import formalities",
      "For destinations where seller has logistics presence",
    ],
    commonMistakes: [
      "Seller not accounting for delays at destination",
      "Not clarifying exact delivery address",
      "Confusion about who unloads the goods",
      "Not considering import clearance delays affecting delivery",
    ],
    riskTransferPoint: 90,
    costTransferPoint: 85,
    sellerResponsibilities: [
      { id: "dap-s1", label: "Packaging", description: "Package goods for transport" },
      { id: "dap-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "dap-s3", label: "Main Carriage", description: "Arrange and pay for all transport" },
      { id: "dap-s4", label: "Delivery", description: "Deliver to named place ready for unloading" },
      { id: "dap-s5", label: "Transit Risk", description: "Bear all transit risks" },
    ],
    buyerResponsibilities: [
      { id: "dap-b1", label: "Unloading", description: "Unload goods from arriving vehicle" },
      { id: "dap-b2", label: "Import Clearance", description: "Handle import formalities" },
      { id: "dap-b3", label: "Duties & Taxes", description: "Pay import duties and taxes" },
    ],
  },
  {
    code: "DPU",
    fullName: "Delivered at Place Unloaded",
    transportMode: "any",
    keyPoint: "Seller delivers and unloads at named destination",
    description:
      "Delivered at Place Unloaded means the seller delivers when the goods, once unloaded from the arriving means of transport, are placed at the disposal of the buyer at a named place of destination. The seller bears all risks involved in bringing the goods to and unloading them at the named place. This is the only Incoterm requiring seller to unload.",
    whenToUse: [
      "When seller has capability to unload at destination",
      "For deliveries to terminals or warehouses",
      "When buyer cannot arrange unloading equipment",
      "For bulk cargo requiring specialized unloading",
    ],
    commonMistakes: [
      "Not having unloading equipment at destination",
      "Underestimating unloading costs and time",
      "Not specifying exact unloading point",
      "Using when buyer has better unloading facilities",
    ],
    riskTransferPoint: 92,
    costTransferPoint: 88,
    sellerResponsibilities: [
      { id: "dpu-s1", label: "Packaging", description: "Package goods for transport" },
      { id: "dpu-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "dpu-s3", label: "Main Carriage", description: "Arrange and pay for all transport" },
      { id: "dpu-s4", label: "Unloading", description: "Unload goods at destination" },
      { id: "dpu-s5", label: "Delivery", description: "Place unloaded goods at buyer's disposal" },
      { id: "dpu-s6", label: "Transit Risk", description: "Bear all risks until unloaded" },
    ],
    buyerResponsibilities: [
      { id: "dpu-b1", label: "Import Clearance", description: "Handle import formalities" },
      { id: "dpu-b2", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "dpu-b3", label: "Onward Transport", description: "Arrange any further transport" },
    ],
  },
  {
    code: "DDP",
    fullName: "Delivered Duty Paid",
    transportMode: "any",
    keyPoint: "Maximum seller obligation - seller delivers cleared for import",
    description:
      "Delivered Duty Paid means the seller delivers the goods when the goods are placed at the disposal of the buyer, cleared for import on the arriving means of transport ready for unloading at the named place of destination. The seller bears all the costs and risks involved in bringing the goods to the place of destination and has an obligation to clear the goods for import and pay any duty.",
    whenToUse: [
      "When seller wants to provide complete door-to-door service",
      "For e-commerce and consumer goods deliveries",
      "When buyer cannot or will not handle import formalities",
      "When seller has import capability in destination country",
    ],
    commonMistakes: [
      "Seller not registered for import in destination country",
      "Underestimating import duties and taxes",
      "Not understanding VAT/GST recovery implications",
      "Using when buyer could recover import VAT but seller cannot",
    ],
    riskTransferPoint: 95,
    costTransferPoint: 95,
    sellerResponsibilities: [
      { id: "ddp-s1", label: "Packaging", description: "Package goods for transport" },
      { id: "ddp-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "ddp-s3", label: "Main Carriage", description: "Arrange and pay for all transport" },
      { id: "ddp-s4", label: "Import Clearance", description: "Clear goods for import" },
      { id: "ddp-s5", label: "Duties & Taxes", description: "Pay all import duties and taxes" },
      { id: "ddp-s6", label: "Delivery", description: "Deliver to named place ready for unloading" },
      { id: "ddp-s7", label: "All Risks", description: "Bear all risks until delivery" },
    ],
    buyerResponsibilities: [
      { id: "ddp-b1", label: "Unloading", description: "Unload goods from arriving vehicle" },
      { id: "ddp-b2", label: "Receipt", description: "Take delivery of goods" },
    ],
  },

  // === SEA-ONLY INCOTERMS ===
  {
    code: "FAS",
    fullName: "Free Alongside Ship",
    transportMode: "sea",
    keyPoint: "Seller delivers alongside vessel at port - sea transport only",
    description:
      "Free Alongside Ship means the seller delivers when the goods are placed alongside the vessel nominated by the buyer at the named port of shipment. The risk of loss or damage to the goods passes when the goods are alongside the ship. The buyer bears all costs and risks from that moment.",
    whenToUse: [
      "For bulk cargo loaded directly onto ships",
      "When buyer wants control over loading onto vessel",
      "For goods requiring specialized loading equipment",
      "When buyer has charter party or vessel booking",
    ],
    commonMistakes: [
      "Using for containerized cargo (use FCA instead)",
      "Not specifying exact delivery point at port",
      "Confusion about who pays for port handling",
      "Not clarifying 'alongside' location precisely",
    ],
    riskTransferPoint: 25,
    costTransferPoint: 25,
    sellerResponsibilities: [
      { id: "fas-s1", label: "Packaging", description: "Package goods for sea transport" },
      { id: "fas-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "fas-s3", label: "Delivery", description: "Deliver goods alongside vessel" },
      { id: "fas-s4", label: "Pre-carriage", description: "Transport to port of shipment" },
    ],
    buyerResponsibilities: [
      { id: "fas-b1", label: "Loading", description: "Load goods onto vessel" },
      { id: "fas-b2", label: "Main Carriage", description: "Arrange and pay for sea freight" },
      { id: "fas-b3", label: "Import Clearance", description: "Handle import formalities" },
      { id: "fas-b4", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "fas-b5", label: "Insurance", description: "Arrange insurance if desired" },
    ],
  },
  {
    code: "FOB",
    fullName: "Free On Board",
    transportMode: "sea",
    keyPoint: "Seller delivers on board vessel - most common sea term",
    description:
      "Free On Board means the seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment. The risk of loss or damage to the goods passes when the goods are on board the vessel, and the buyer bears all costs from that moment. FOB is appropriate only for sea or inland waterway transport.",
    whenToUse: [
      "For bulk cargo and non-containerized goods via sea",
      "When buyer has vessel or freight arrangements",
      "For traditional commodity trading",
      "When buyer wants control over main sea carriage",
    ],
    commonMistakes: [
      "Using for containerized cargo (use FCA instead)",
      "Assuming FOB works for air freight (it doesn't)",
      "Not understanding 'on board' means crossing ship's rail",
      "Using for multimodal transport",
    ],
    riskTransferPoint: 30,
    costTransferPoint: 30,
    sellerResponsibilities: [
      { id: "fob-s1", label: "Packaging", description: "Package goods for sea transport" },
      { id: "fob-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "fob-s3", label: "Delivery", description: "Deliver goods on board vessel" },
      { id: "fob-s4", label: "Pre-carriage", description: "Transport to port of shipment" },
      { id: "fob-s5", label: "Loading", description: "Load goods onto vessel" },
    ],
    buyerResponsibilities: [
      { id: "fob-b1", label: "Main Carriage", description: "Arrange and pay for sea freight" },
      { id: "fob-b2", label: "Import Clearance", description: "Handle import formalities" },
      { id: "fob-b3", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "fob-b4", label: "Insurance", description: "Arrange insurance if desired" },
      { id: "fob-b5", label: "Unloading", description: "Unload at destination port" },
    ],
  },
  {
    code: "CFR",
    fullName: "Cost and Freight",
    transportMode: "sea",
    keyPoint: "Seller pays freight but risk transfers on board at origin port",
    description:
      "Cost and Freight means the seller delivers the goods on board the vessel at the port of shipment. The seller must contract for and pay the costs and freight necessary to bring the goods to the named port of destination. However, risk transfers when goods are on board at origin, not at destination.",
    whenToUse: [
      "When seller can negotiate better sea freight rates",
      "For delivered pricing via sea without insurance",
      "When buyer will arrange own insurance",
      "For commodity trades with CFR pricing convention",
    ],
    commonMistakes: [
      "Assuming seller bears risk until destination",
      "Buyer not arranging marine insurance",
      "Using for containerized cargo (use CPT instead)",
      "Not understanding the split between cost and risk points",
    ],
    riskTransferPoint: 30,
    costTransferPoint: 75,
    sellerResponsibilities: [
      { id: "cfr-s1", label: "Packaging", description: "Package goods for sea transport" },
      { id: "cfr-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "cfr-s3", label: "Delivery", description: "Deliver goods on board vessel" },
      { id: "cfr-s4", label: "Loading", description: "Load goods onto vessel" },
      { id: "cfr-s5", label: "Main Carriage", description: "Contract and pay for sea freight to destination" },
    ],
    buyerResponsibilities: [
      { id: "cfr-b1", label: "Risk from Loading", description: "Bear risk once goods are on board" },
      { id: "cfr-b2", label: "Import Clearance", description: "Handle import formalities" },
      { id: "cfr-b3", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "cfr-b4", label: "Insurance", description: "Arrange marine insurance (recommended)" },
      { id: "cfr-b5", label: "Unloading", description: "Unload at destination port" },
    ],
  },
  {
    code: "CIF",
    fullName: "Cost, Insurance and Freight",
    transportMode: "sea",
    keyPoint: "Like CFR but seller must provide marine insurance",
    description:
      "Cost, Insurance and Freight means the seller delivers the goods on board the vessel at the port of shipment. The seller must contract for and pay the costs, freight, and insurance to bring the goods to the named port of destination. Under Incoterms 2020, CIF requires minimum insurance (ICC C or equivalent). Risk still transfers on board at origin.",
    whenToUse: [
      "When buyer requires seller to provide insurance",
      "For international sea trade with insurance requirement",
      "When seller can obtain competitive insurance rates",
      "For letter of credit transactions requiring CIF pricing",
    ],
    commonMistakes: [
      "Assuming seller bears risk until destination",
      "Not understanding ICC C is minimum coverage only",
      "Buyer not arranging additional insurance if needed",
      "Using for containerized cargo (use CIP instead)",
    ],
    riskTransferPoint: 30,
    costTransferPoint: 80,
    sellerResponsibilities: [
      { id: "cif-s1", label: "Packaging", description: "Package goods for sea transport" },
      { id: "cif-s2", label: "Export Clearance", description: "Clear goods for export" },
      { id: "cif-s3", label: "Delivery", description: "Deliver goods on board vessel" },
      { id: "cif-s4", label: "Loading", description: "Load goods onto vessel" },
      { id: "cif-s5", label: "Main Carriage", description: "Contract and pay for sea freight to destination" },
      { id: "cif-s6", label: "Insurance", description: "Obtain minimum insurance coverage (ICC C)" },
    ],
    buyerResponsibilities: [
      { id: "cif-b1", label: "Risk from Loading", description: "Bear risk once goods are on board" },
      { id: "cif-b2", label: "Import Clearance", description: "Handle import formalities" },
      { id: "cif-b3", label: "Duties & Taxes", description: "Pay import duties and taxes" },
      { id: "cif-b4", label: "Unloading", description: "Unload at destination port" },
    ],
  },
];

// Helper functions
export function getIncotermByCode(code: string): Incoterm | undefined {
  return incoterms.find((i) => i.code.toLowerCase() === code.toLowerCase());
}

export function getIncotermsByTransportMode(mode: "sea" | "any"): Incoterm[] {
  return incoterms.filter((i) => i.transportMode === mode);
}

export function getSeaOnlyIncoterms(): Incoterm[] {
  return getIncotermsByTransportMode("sea");
}

export function getAnyModeIncoterms(): Incoterm[] {
  return getIncotermsByTransportMode("any");
}

// For comparison - attributes that can be compared
export const comparisonAttributes = [
  { key: "transportMode", label: "Transport Mode", getValue: (i: Incoterm) => i.transportMode === "sea" ? "Sea Only" : "Any Mode" },
  { key: "riskTransfer", label: "Risk Transfer Point", getValue: (i: Incoterm) => `${i.riskTransferPoint}%` },
  { key: "costTransfer", label: "Cost Transfer Point", getValue: (i: Incoterm) => `${i.costTransferPoint}%` },
  { key: "exportClearance", label: "Export Clearance", getValue: (i: Incoterm) => i.code === "EXW" ? "Buyer" : "Seller" },
  { key: "importClearance", label: "Import Clearance", getValue: (i: Incoterm) => i.code === "DDP" ? "Seller" : "Buyer" },
  { key: "mainCarriage", label: "Main Carriage", getValue: (i: Incoterm) => ["EXW", "FCA", "FAS", "FOB"].includes(i.code) ? "Buyer" : "Seller" },
  { key: "insurance", label: "Insurance Required", getValue: (i: Incoterm) => ["CIF", "CIP"].includes(i.code) ? "Yes (Seller)" : "No (Optional)" },
  { key: "unloading", label: "Unloading", getValue: (i: Incoterm) => i.code === "DPU" ? "Seller" : "Buyer" },
];
