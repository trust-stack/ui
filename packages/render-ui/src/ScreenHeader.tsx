import {ScreenHeader as TScreenHeader} from "@truststack/schema";
import {TopAppBar} from "@truststack/ui";

export type ScreenHeaderProps = {
  readonly data: TScreenHeader;
};

export function ScreenHeader({data}: ScreenHeaderProps) {
  const isSmall = data?.size === "small";
  const isMedium = data?.size === "medium";
  const isLarge = data?.size === "large";

  return (
    <TopAppBar size={data?.size} backgroundColor={"transparent"}>
      <TopAppBar.TopRail>
        {isSmall && (
          <TopAppBar.SmallHeadline>{data?.title}</TopAppBar.SmallHeadline>
        )}
      </TopAppBar.TopRail>
      <TopAppBar.BottomRail>
        {isMedium && (
          <TopAppBar.MediumHeadline>{data?.title}</TopAppBar.MediumHeadline>
        )}
        {isLarge && (
          <TopAppBar.LargeHeadline>{data?.title}</TopAppBar.LargeHeadline>
        )}
      </TopAppBar.BottomRail>
    </TopAppBar>
  );
}
