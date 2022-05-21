import { isIos } from "./";

export const FontFamily = {
    Bold: isIos ? 'Proxima Nova A' : 'ProximaNovaAlt-Bold',
    ThinBold: isIos ? 'Proxima Nova A Condensed' : 'ProximaNovaAltCond-Semibold',
    SemiBold: isIos ? 'Proxima Nova A' : 'ProximaNovaAlt-Semibold',
    Regular: isIos ? 'Proxima Nova A' : 'ProximaNovaAlt-Regular',
}