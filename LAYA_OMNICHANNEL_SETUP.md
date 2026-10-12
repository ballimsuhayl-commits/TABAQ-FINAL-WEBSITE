# Laya omnichannel setup — REV244

Laya's conversation engine is deployed at `tabaq-laya-api.vercel.app` and the public TABAQ domain proxies the branded webhook URLs below.

## Customer-facing rule

Laya stays in character as the TABAQ scent concierge. She does not volunteer model/provider/API/automation language. If directly asked whether she is a human, she must answer truthfully that she is TABAQ's virtual concierge.

## Intelligence provider

Configure at least one server-side provider on the **tabaq-laya-api** Vercel project:

- `GROQ_API_KEY` — primary free-tier route; default model `openai/gpt-oss-120b`
- optional `GROQ_MODEL`
- optional Vercel Gateway credentials: `AI_GATEWAY_API_KEY`
- optional model overrides: `TABAQ_GATEWAY_FAST_MODEL`, `TABAQ_GATEWAY_SMART_MODEL`

Never put provider keys in browser JavaScript or commit them to GitHub.

## WhatsApp + Instagram + Messenger

Webhook URL:
`https://www.houseoftabaq.com/api/channels/meta`

Vercel environment variables on **tabaq-laya-api**:
- `META_VERIFY_TOKEN`
- `META_APP_SECRET`
- `META_WHATSAPP_TOKEN`
- `META_WHATSAPP_PHONE_NUMBER_ID` (optional if supplied by webhook metadata)
- `META_PAGE_TOKEN` for Messenger / Instagram messaging
- `META_GRAPH_VERSION` optional override
- `WHATSAPP_PUBLIC_NUMBER` optional, digits only, to expose Continue on WhatsApp in the website chat
- `INSTAGRAM_PUBLIC_HANDLE` optional, to expose Instagram in the website chat

Meta account/app permissions and webhook subscriptions still have to be approved inside the Meta developer/business account.

## Telegram

Webhook URL:
`https://www.houseoftabaq.com/api/channels/telegram`

Environment:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_WEBHOOK_SECRET`
- `TELEGRAM_PUBLIC_USERNAME` optional

Register the webhook with Telegram after the variables are present.

## WeChat Official Account

Webhook URL:
`https://www.houseoftabaq.com/api/channels/wechat`

Environment:
- `WECHAT_TOKEN`
- `WECHAT_QR_URL` optional public QR image URL

The current adapter supports text messages in the standard/plain webhook mode. WeChat encrypted-message mode requires the account EncodingAESKey and should be added when the actual Official Account settings are known.

## Any other platform

Generic bridge:
`https://www.houseoftabaq.com/api/channels/bridge`

Authorization:
`Authorization: Bearer <SOCIAL_BRIDGE_SECRET>`

Environment:
- `SOCIAL_BRIDGE_SECRET`

POST JSON:
```json
{
  "channel": "line-or-tiktok-or-x-or-crm",
  "user_id": "platform-user-id",
  "message": "customer text",
  "history": []
}
```

Response:
```json
{
  "reply": "Laya's reply",
  "action": {"type":"product","id":"amber-haze","url":"https://www.houseoftabaq.com/amber-haze.html"}
}
```

This bridge is intended for Make, n8n, Zapier, CRM inboxes or platform-specific middleware when a platform does not expose the same webhook shape as Meta/Telegram/WeChat.

## Conversation memory

Website chat stores recent turns in the visitor session. Native social adapters also maintain short recent memory inside warm server instances. For durable cross-day omnichannel memory, connect a persistent store before relying on long-term preferences as a factual customer record.
