export declare const Spinner: import("tamagui").TamaguiComponent<import("@tamagui/core").TamaDefer, any, import("@tamagui/core").TamaguiComponentPropsBaseBase & Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    } | null | undefined;
    fullscreen?: boolean | undefined;
}>, "children"> & {
    size?: "small" | "large";
    color?: (import("tamagui").ColorTokens | import("tamagui").ThemeTokens | (string & {})) | null;
} & import("react").RefAttributes<any>, import("@tamagui/core").StackStyleBase & {
    [x: string]: Omit<"red" | "pink" | "orange" | "gold" | "$0.25" | "$0.5" | "$0.75" | "$1.5" | "$2.5" | "$3.5" | "$true" | "$4.5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$13" | "$14" | "$15" | "$16" | "$17" | "$18" | "$19" | "$20" | "$-0.25" | "$-0.5" | "$-0.75" | "$-1" | "$-1.5" | "$-2" | "$-2.5" | "$-3" | "$-3.5" | "$-4" | "$-true" | "$-4.5" | "$-5" | "$-6" | "$-7" | "$-8" | "$-9" | "$-10" | "$-11" | "$-12" | "$-13" | "$-14" | "$-15" | "$-16" | "$-17" | "$-18" | "$-19" | "$-20" | "transparent" | "$outline" | "$surfaceVariant" | "$shadow" | "$primary" | "$secondary" | "$surfaceTint" | "$onPrimary" | "$primaryContainer" | "$onPrimaryContainer" | "$onSecondary" | "$secondaryContainer" | "$onSecondaryContainer" | "$tertiary" | "$onTertiary" | "$tertiaryContainer" | "$onTertiaryContainer" | "$error" | "$onError" | "$errorContainer" | "$onErrorContainer" | "$background" | "$onBackground" | "$surface" | "$onSurface" | "$onSurfaceOpacity" | "$onSurfaceVariant" | "$outlineVariant" | "$shadow_opacity" | "$scrim" | "$inverseSurface" | "$inverseOnSurface" | "$inversePrimary" | "$primaryFixed" | "$onPrimaryFixed" | "$primaryFixedDim" | "$onPrimaryFixedVariant" | "$secondaryFixed" | "$onSecondaryFixed" | "$secondaryFixedDim" | "$onSecondaryFixedVariant" | "$tertiaryFixed" | "$onTertiaryFixed" | "$tertiaryFixedDim" | "$onTertiaryFixedVariant" | "$surfaceDim" | "$surfaceBright" | "$surfaceContainerLowest" | "$surfaceContainerLow" | "$surfaceContainer" | "$surfaceContainerHigh" | "$surfaceContainerHighest" | "$warning" | "$onWarning" | "$warningContainer" | "$onWarningContainer" | "$success" | "$onSuccess" | "$successContainer" | "$onSuccessContainer" | "$info" | "$onInfo" | "$infoContainer" | "$onInfoContainer" | "$yellow1Light" | "$yellow2Light" | "$yellow3Light" | "$yellow4Light" | "$yellow5Light" | "$yellow6Light" | "$yellow7Light" | "$yellow8Light" | "$yellow9Light" | "$yellow10Light" | "$yellow11Light" | "$yellow12Light" | "$red1Light" | "$red2Light" | "$red3Light" | "$red4Light" | "$red5Light" | "$red6Light" | "$red7Light" | "$red8Light" | "$red9Light" | "$red10Light" | "$red11Light" | "$red12Light" | "$purple1Light" | "$purple2Light" | "$purple3Light" | "$purple4Light" | "$purple5Light" | "$purple6Light" | "$purple7Light" | "$purple8Light" | "$purple9Light" | "$purple10Light" | "$purple11Light" | "$purple12Light" | "$pink1Light" | "$pink2Light" | "$pink3Light" | "$pink4Light" | "$pink5Light" | "$pink6Light" | "$pink7Light" | "$pink8Light" | "$pink9Light" | "$pink10Light" | "$pink11Light" | "$pink12Light" | "$orange1Light" | "$orange2Light" | "$orange3Light" | "$orange4Light" | "$orange5Light" | "$orange6Light" | "$orange7Light" | "$orange8Light" | "$orange9Light" | "$orange10Light" | "$orange11Light" | "$orange12Light" | "$green1Light" | "$green2Light" | "$green3Light" | "$green4Light" | "$green5Light" | "$green6Light" | "$green7Light" | "$green8Light" | "$green9Light" | "$green10Light" | "$green11Light" | "$green12Light" | "$gray1Light" | "$gray2Light" | "$gray3Light" | "$gray4Light" | "$gray5Light" | "$gray6Light" | "$gray7Light" | "$gray8Light" | "$gray9Light" | "$gray10Light" | "$gray11Light" | "$gray12Light" | "$blue1Light" | "$blue2Light" | "$blue3Light" | "$blue4Light" | "$blue5Light" | "$blue6Light" | "$blue7Light" | "$blue8Light" | "$blue9Light" | "$blue10Light" | "$blue11Light" | "$blue12Light" | "$yellow1Dark" | "$yellow2Dark" | "$yellow3Dark" | "$yellow4Dark" | "$yellow5Dark" | "$yellow6Dark" | "$yellow7Dark" | "$yellow8Dark" | "$yellow9Dark" | "$yellow10Dark" | "$yellow11Dark" | "$yellow12Dark" | "$red1Dark" | "$red2Dark" | "$red3Dark" | "$red4Dark" | "$red5Dark" | "$red6Dark" | "$red7Dark" | "$red8Dark" | "$red9Dark" | "$red10Dark" | "$red11Dark" | "$red12Dark" | "$purple1Dark" | "$purple2Dark" | "$purple3Dark" | "$purple4Dark" | "$purple5Dark" | "$purple6Dark" | "$purple7Dark" | "$purple8Dark" | "$purple9Dark" | "$purple10Dark" | "$purple11Dark" | "$purple12Dark" | "$pink1Dark" | "$pink2Dark" | "$pink3Dark" | "$pink4Dark" | "$pink5Dark" | "$pink6Dark" | "$pink7Dark" | "$pink8Dark" | "$pink9Dark" | "$pink10Dark" | "$pink11Dark" | "$pink12Dark" | "$orange1Dark" | "$orange2Dark" | "$orange3Dark" | "$orange4Dark" | "$orange5Dark" | "$orange6Dark" | "$orange7Dark" | "$orange8Dark" | "$orange9Dark" | "$orange10Dark" | "$orange11Dark" | "$orange12Dark" | "$green1Dark" | "$green2Dark" | "$green3Dark" | "$green4Dark" | "$green5Dark" | "$green6Dark" | "$green7Dark" | "$green8Dark" | "$green9Dark" | "$green10Dark" | "$green11Dark" | "$green12Dark" | "$gray1Dark" | "$gray2Dark" | "$gray3Dark" | "$gray4Dark" | "$gray5Dark" | "$gray6Dark" | "$gray7Dark" | "$gray8Dark" | "$gray9Dark" | "$gray10Dark" | "$gray11Dark" | "$gray12Dark" | "$blue1Dark" | "$blue2Dark" | "$blue3Dark" | "$blue4Dark" | "$blue5Dark" | "$blue6Dark" | "$blue7Dark" | "$blue8Dark" | "$blue9Dark" | "$blue10Dark" | "$blue11Dark" | "$blue12Dark" | "auto" | (`${string}%` & {}) | import("tamagui").ZIndexTokens | import("@tamagui/core").ThemeValueFallbackZIndex | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred " | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | (`rgba(${string})` & {}) | (`rgb(${string})` & {}) | (`hsl(${string})` & {}) | (`hsla(${string})` & {}) | (`#${string}` & {}), "unset">;
}, {
    variant?: "primary" | "secondary";
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=Spinner.d.ts.map