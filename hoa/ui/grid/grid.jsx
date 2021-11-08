import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { SanityImage } from "@hoa/hoa.ui.sanity_image"
import { ResponsiveGrid } from "@hoa/hoa.ui.responsive_grid"
import { CMSLink } from "@hoa/hoa.ui.cms_link"

const StyledGridItem = styled.div`
  position: relative;
`

const StyledSanityImage = styled(SanityImage)`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

const ItemOverlay = styled.div`
  bottom: 0;
  color: white;
  font-size: 1.125rem;
  font-weight: var(--weight-slight-bold);
  left: 0;
  padding: 15px 20px;
  pointer-events: none;
  position: absolute;
  text-shadow: 0px 0px 1px black;
  width: 100%;
`

const GridItem = ({ item }) => (
  <StyledGridItem>
    <CMSLink link={item.link} isOptional={true}>
      <StyledSanityImage image={item.image} alt="" />
    </CMSLink>

    {item.text && <ItemOverlay>{item.text}</ItemOverlay>}
  </StyledGridItem>
)

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const Styled = styled(ResponsiveGrid)`
  column-gap: var(--grid-gap);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  row-gap: var(--grid-gap);
`

export const Grid = ({ items, phoneColumnCount, tabletColumnCount }) => (
  <Styled columns={phoneColumnCount} tabletColumns={tabletColumnCount}>
    {items.map(item => (
      <GridItem key={item._key} item={item} />
    ))}
  </Styled>
)

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  phoneColumnCount: PropTypes.number.isRequired,
  tabletColumnCount: PropTypes.number.isRequired,
}
