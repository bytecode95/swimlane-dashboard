import { useMemo } from "react";

import { MenuSection } from "@/theme/types";
import { menuSections } from "../config/menu.config";

export const useMenu = (): MenuSection[] => {
    return useMemo(() => menuSections, []);
};
