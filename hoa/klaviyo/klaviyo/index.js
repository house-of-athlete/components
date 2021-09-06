const headers = {
  "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
}

const backInStockEndpoint =
  "https://a.klaviyo.com/onsite/components/back-in-stock/subscribe"

/**
 * Signs up for back-in-stock notifications. Exception is thrown if the request is not successful.
 */
export const signUpForBackInStock = async ({ accountId, email, variant }) => {
  if (!accountId) {
    throw new Error("`accountId` is required")
  }

  const resp = await (
    await fetch(backInStockEndpoint, {
      method: "POST",
      headers,
      body: new URLSearchParams({
        a: accountId,
        email,
        platform: "shopify",
        variant: variant.legacyResourceId,
      }),
    })
  ).json()

  if (resp.success) {
    return resp
  } else {
    throw new Error(JSON.stringify(resp))
  }
}

const subscribeEndpoint =
  "https://manage.kmail-lists.com/ajax/subscriptions/subscribe"

export const subscribeToMailingList = async ({ email, listId }) => {
  if (!listId) {
    throw new Error("`listId` is required")
  }

  const resp = await (
    await fetch(subscribeEndpoint, {
      method: "POST",
      headers,
      body: new URLSearchParams({
        g: listId,
        email,
      }),
    })
  ).json()

  if (resp.success) {
    return resp
  } else {
    throw new Error(JSON.stringify(resp))
  }
}
