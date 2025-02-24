import { tokens as defaultTokens } from '@tamagui/themes/v2';
import { createTokens } from 'tamagui';

const colors = {
    plant_breeding: '#FF6600',
    grain: '#FF9900',
    sustainability: '#B1D841',
    livestock: '#FF4842',
    assure: '#9AD1D4',
    lifecycle: '#B1D841',
    seafood: '#8fd0e5',
    seed: '#FCD513',
    hort: '#97E07D',
    procurement: 'rgb(255 217 223)',
    provenance: '#000946',
    onProvenance: '#ffffff',
    provenanceContainer: '#1c2977',
    onProvenanceContainer: '#b3bcff',
    primary: 'rgb(74 92 146)',
    surfaceTint: 'rgb(74 92 146)',
    onPrimary: 'rgb(255 255 255)',
    primaryContainer: 'rgb(219 225 255)',
    onPrimaryContainer: 'rgb(0 24 74)',
    secondary: 'rgb(57 96 143)',
    onSecondary: 'rgb(255 255 255)',
    secondaryContainer: 'rgb(211 228 255)',
    onSecondaryContainer: 'rgb(0 28 56)',
    tertiary: 'rgb(115 84 113)',
    onTertiary: 'rgb(255 255 255)',
    tertiaryContainer: 'rgb(255 214 248)',
    onTertiaryContainer: 'rgb(43 18 43)',
    error: 'rgb(186 26 26)',
    onError: 'rgb(255 255 255)',
    errorContainer: 'rgb(255 218 214)',
    onErrorContainer: 'rgb(65 0 2)',
    background: 'rgb(250 248 255)',
    onBackground: 'rgb(26 27 33)',
    surface: 'rgb(250 248 255)',
    onSurface: 'rgb(26 27 33)',
    // TODO: set this per theme
    onSurfaceOpacity: 'rgba(26, 27, 33, 0.1)',
    surfaceVariant: 'rgb(226 226 236)',
    onSurfaceVariant: 'rgb(69 70 79)',
    outline: 'rgb(117 118 128)',
    outlineVariant: 'rgb(197 198 208)',
    shadow: 'rgb(0 0 0)',
    shadow_opacity: '#00000054',
    scrim: 'rgb(0 0 0)',
    inverseSurface: 'rgb(47 48 54)',
    inverseOnSurface: 'rgb(241 240 247)',
    inversePrimary: 'rgb(179 197 255)',
    primaryFixed: 'rgb(219 225 255)',
    onPrimaryFixed: 'rgb(0 24 74)',
    primaryFixedDim: 'rgb(179 197 255)',
    onPrimaryFixedVariant: 'rgb(50 69 120)',
    secondaryFixed: 'rgb(211 228 255)',
    onSecondaryFixed: 'rgb(0 28 56)',
    secondaryFixedDim: 'rgb(162 201 254)',
    onSecondaryFixedVariant: 'rgb(29 72 117)',
    tertiaryFixed: 'rgb(255 214 248)',
    onTertiaryFixed: 'rgb(43 18 43)',
    tertiaryFixedDim: 'rgb(225 187 220)',
    onTertiaryFixedVariant: 'rgb(90 61 88)',
    surfaceDim: 'rgb(218 217 224)',
    surfaceBright: 'rgb(250 248 255)',
    surfaceContainerLowest: 'rgb(255 255 255)',
    surfaceContainerLow: 'rgb(244 243 250)',
    surfaceContainer: 'rgb(238 237 244)',
    surfaceContainerHigh: 'rgb(232 231 239)',
    surfaceContainerHighest: 'rgb(227 226 233)',

    // Warning
    warning: '#855318',
    onWarning: '#ffffff',
    warningContainer: '#ffdcbe',
    onWarningContainer: '#2c1600',

    // Success
    success: '#406836',
    onSuccess: '#ffffff',
    successContainer: '#c0efb0',
    onSuccessContainer: '#002200',

    // Info
    info: '#006493',
    onInfo: '#ffffff',
    infoContainer: '#cae6ff',
    onInfoContainer: '#001e30',

    // Misc
    actionRed: '#FF4842',
    onActionRed: '#FFFFFF',

    // NGR
    ngrPrimary: '#a43b2a',
    ngrPrimaryContainer: '#ffdad4',
    ngrBackground: '#9a3423',
    onNgrBackground: '#FFFFFF',

    // Event
    event: '#3d5aa9',
    onEvent: '#ffffff',
    eventContainer: '#dbe1ff',
    onEventContainer: '#00174a',

    // Conformity
    conformity: '#006a67',
    onConformity: '#ffffff',
    conformityContainer: '#6ff7f2',
    onConformityContainer: '#00201f',

    // Passport
    passport: '#974800',
    onPassport: '#ffffff',
    passportContainer: '#ffdbc7',
    onPassportContainer: '#311300',

    // Identifier
    identifier: '#246c19',
    onIdentifier: '#ffffff',
    identifierContainer: '#a8f691',
    onIdentifierContainer: '#012200',

    // Emissions Reporting
    // Sheep = GREEN (#00FF00)
    sheep: '#406836',
    onSheep: '#ffffff',
    sheepContainer: '#c0efb0',
    onSheepContainer: '#002200',

    // Crop = YELLOW (#FFFF00)
    crop: '#616118',
    onCrop: '#ffffff',
    cropContainer: '#e8e78f',
    onCropContainer: '#1d1d00',

    // Beef = RED (#FF0000)
    beef: '#904b40',
    onBeef: '#ffffff',
    beefContainer: '#ffdad4',
    onBeefContainer: '#3a0905',

    // Goat
    goat: '#FFD700',
    onGoat: '#000000',
    goatContainer: '#FFF8DC',
    onGoatContainer: '#4B3D00',

    // Feedlot
    feedlot: '#8B4513',
    onFeedlot: '#FFFFFF',
    feedlotContainer: '#D2B48C',
    onFeedlotContainer: '#4A2C17',
    // Methan = ORANGE
    methane: '#815512',
    onMethane: '#ffffff',
    methaneContainer: '#ffddb7',
    onMethaneContainer: '#2a1700',

    // Carbon = YELLOW
    carbon: '#a5d395',
    onCarbon: '#11380b',
    carbonContainer: '#285020',
    onCarbonContainer: '#c0efb0',

    // Nitrous Oxide = GREEN
    nitrousOxide: '#616118',
    onNitrousOxide: '#ffffff',
    nitrousOxideContainer: '#e8e78f',
    onNitrousOxideContainer: '#1d1d00',

    // Scope one
    scopeOne: '#555992',
    onScopeOne: '#ffffff',
    scopeOneContainer: '#e0e0ff',
    onScopeOneContainer: '#11144b',

    // SCOPE
    scope: '#1A6585',
    onScope: '#FFFFFF',
    scopeContainer: '#C2E8FF',
    onScopeContainer: '#001E2C',
    scope_0: '#000000',
    scope_5: '#00131D',
    scope_10: '#001E2C',
    scope_15: '#00293A',
    scope_20: '#003549',
    scope_25: '#124054',
    scope_30: '#204B60',
    scope_35: '#2E576C',
    scope_40: '#3A6379',
    scope_50: '#547C93',
    scope_60: '#6D96AD',
    scope_70: '#88B1C9',
    scope_80: '#A3CCE5',
    scope_90: '#C2E8FF',
    scope_95: '#E2F3FF',
    scope_98: '#F5FAFF',
    scope_99: '#FBFCFF',
    scope_100: '#FFFFFF',

    // Scope Two
    scopeTwo: '#006a6a',
    onScopeTwo: '#ffffff',
    scopeTwoContainer: '#9cf1f0',
    onScopeTwoContainer: '#002020',

    // Scope Three
    scopeThree: '#226a4d',
    onScopeThree: '#ffffff',
    scopeThreeContainer: '#a9f2cc',
    onScopeThreeContainer: '#002114',

    //colors
    vividOrange: '#FF9900',
    limeGreen: '#B1D841',

    // Linked Proofs
    wastePlanLinkChip: '#FFB76B',
    noProofMessage: '#EE6B6E',
    // Emission Report
    allocationColors: '#FAFAEE',

    // Linked Proofs
    wastePlanButton: '#FFB76B',
    wastePlanText: '#EE6B6E',

    // Button Success
    successVariant: '#d6ea9b',
    onSuccessVariant: '#e3edc4',

    // Electricity
    electricity: '#705d00',
    onElectricity: '#ffffff',
    electricityContainer: '#ffda41',
    onElectricityContainer: '#524300',

    // Fuel
    fuel: '#ad3223',
    onFuel: '#ffffff',
    fuelContainer: '#ff816e',
    onFuelContainer: '#400000',

    // Fertiliser
    fertiliser: '#7920aa',
    onFeriliser: '#ffffff',
    fertiliserContainer: '#a24dd2',
    onFertiliserContainer: '#ffffff',

    //Task

    // BACKLOG
    backlogLightest: '#F7F7F7', // Very Light Gray
    backlogLighter: '#E0E0E0', // Light Gray
    backlogBase: '#BDBDBD', // Medium Gray
    backlogDarker: '#757575', // Dark Gray

    //DONE
    doneLightest: '#E8F5E9', // Very Light Green
    doneLighter: '#A5D6A7', // Light Green
    doneBase: '#4CAF50', // Medium Green
    doneDarker: '#2E7D32', // Dark Green

    //IN_PROGRESS
    inProgressLightest: '#FFF8E1', // Very Light Amber
    inProgressLighter: '#FFE082', // Light Amber
    inProgressBase: '#FFC107', // Medium Amber
    inProgressDarker: '#FFA000', // Dark Amber

    //UP_NEXT
    upNextLightest: '#E1F5FE', // Very Light Blue
    upNextLighter: '#81D4FA', // Light Blue
    upNextBase: '#03A9F4', // Medium Blue
    upNextDarker: '#0277BD', // Dark Blue

    //HIGH
    highLightest: '#FFEBEE', // Very Light Red
    highLighter: '#FFCDD2', // Light Red
    highBase: '#F44336', // Medium Red
    highDarker: '#D32F2F', // Dark Red

    //MEDIUM
    mediumLightest: '#FFF3E0', // Very Light Orange
    mediumLighter: '#FFE0B2', // Light Orange
    mediumBase: '#FF9800', // Medium Orange
    mediumDarker: '#F57C00', // Dark Orange

    //LOW
    lowLightest: '#E8F5E9', // Very Light Green
    lowLighter: '#A5D6A7', // Light Green
    lowBase: '#4CAF50', // Medium Green
    lowDarker: '#388E3C', // Dark Green
};

export const tokens = createTokens({
    ...defaultTokens,
    border: {
        outline: 1,
        divider_width: 1,
        true: 0,
    },
    shape: {
        // https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-sys-shape.scss
        corner_extra_small: 4,
        corner_full: 22,
        corner_l: 16,
        corner_large: 28,
        corner_m: 12,
        corner_medium: 12,
        corner_none: 0,
        corner_sm: 8,
        corner_small: 8,
        corner_xl: 28,
        corner_xs: 4,
        bs_1: '1px 1px 1px rgba(0 0 0)',
    },
    shadow: {
        5: 12,
        4: 8,
        3: 6,
        2: 3,
        '1': 1,
        bs_1: '2px 2px black',
        0: 0,
        true: 0,
    },
    color: {
        ...defaultTokens.color,
        ...colors,
    },
    spacing: {
        margin_compact: 16,
        form_gap: 16,
        card_gap: 8,
        compact_margin: 16,
        medium_margin: 24,
        exp_margin: 24,
        large_margin: 24,
        card_body: 16,
        card_body_1: 12,
        card_body_2: 8,
        card_body_3: 4,
        chip_spacing: 8,
        // https://m3.material.io/components/floating-action-button/specs#e5677e43-376c-449c-8e0d-bf26c852fc46
        fab_padding: 16,
        pane_gap: 24,
    },
    size: {
        list_item_height: 56,
        nav_rail_width: 80,
        main_max_width: 1200,
        pane_supporting: 360,
        ...defaultTokens.size,
    },
    gmp: {
        auburn: '#2C040F',
        onAuburn: '#F3F1E6',
        red: '#FB6647',
        pink: '#F48999',
        onPink: '#2C040F',
        orange: '#FBAC50',
        onOrange: '#2C040F',
        cream: '#F3F1E6',
        onCream: '#2C040F',
        gold: '#EDAE11',
        true: '#2C040F',
    },
    provenance: {
        primary: '#1568FF',
        primaryAlt: '#091969',
        secondary: '#B1D0FC',
        secondaryAlt: '#E6E7E8',
        secondaryAlt2: '#91A6B7',
    },
});
