/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the specific error that occurred during a request to a
 * Square API.
 */
export type ErrorCode =
    | "INTERNAL_SERVER_ERROR"
    | "UNAUTHORIZED"
    | "ACCESS_TOKEN_EXPIRED"
    | "ACCESS_TOKEN_REVOKED"
    | "CLIENT_DISABLED"
    | "FORBIDDEN"
    | "INSUFFICIENT_SCOPES"
    | "APPLICATION_DISABLED"
    | "V1_APPLICATION"
    | "V1_ACCESS_TOKEN"
    | "CARD_PROCESSING_NOT_ENABLED"
    | "MERCHANT_SUBSCRIPTION_NOT_FOUND"
    | "BAD_REQUEST"
    | "MISSING_REQUIRED_PARAMETER"
    | "INCORRECT_TYPE"
    | "INVALID_TIME"
    | "INVALID_TIME_RANGE"
    | "INVALID_VALUE"
    | "INVALID_CURSOR"
    | "UNKNOWN_QUERY_PARAMETER"
    | "CONFLICTING_PARAMETERS"
    | "EXPECTED_JSON_BODY"
    | "INVALID_SORT_ORDER"
    | "VALUE_REGEX_MISMATCH"
    | "VALUE_TOO_SHORT"
    | "VALUE_TOO_LONG"
    | "VALUE_TOO_LOW"
    | "VALUE_TOO_HIGH"
    | "VALUE_EMPTY"
    | "ARRAY_LENGTH_TOO_LONG"
    | "ARRAY_LENGTH_TOO_SHORT"
    | "ARRAY_EMPTY"
    | "EXPECTED_BOOLEAN"
    | "EXPECTED_INTEGER"
    | "EXPECTED_FLOAT"
    | "EXPECTED_STRING"
    | "EXPECTED_OBJECT"
    | "EXPECTED_ARRAY"
    | "EXPECTED_MAP"
    | "EXPECTED_BASE64_ENCODED_BYTE_ARRAY"
    | "INVALID_ARRAY_VALUE"
    | "INVALID_ENUM_VALUE"
    | "INVALID_CONTENT_TYPE"
    | "INVALID_FORM_VALUE"
    | "CUSTOMER_NOT_FOUND"
    | "ONE_INSTRUMENT_EXPECTED"
    | "NO_FIELDS_SET"
    | "TOO_MANY_MAP_ENTRIES"
    | "MAP_KEY_LENGTH_TOO_SHORT"
    | "MAP_KEY_LENGTH_TOO_LONG"
    | "CUSTOMER_MISSING_NAME"
    | "CUSTOMER_MISSING_EMAIL"
    | "INVALID_PAUSE_LENGTH"
    | "INVALID_DATE"
    | "UNSUPPORTED_COUNTRY"
    | "UNSUPPORTED_CURRENCY"
    | "APPLE_TTP_PIN_TOKEN"
    | "CARD_EXPIRED"
    | "INVALID_EXPIRATION"
    | "INVALID_EXPIRATION_YEAR"
    | "INVALID_EXPIRATION_DATE"
    | "UNSUPPORTED_CARD_BRAND"
    | "UNSUPPORTED_ENTRY_METHOD"
    | "INVALID_ENCRYPTED_CARD"
    | "INVALID_CARD"
    | "PAYMENT_AMOUNT_MISMATCH"
    | "GENERIC_DECLINE"
    | "CVV_FAILURE"
    | "ADDRESS_VERIFICATION_FAILURE"
    | "INVALID_ACCOUNT"
    | "CURRENCY_MISMATCH"
    | "INSUFFICIENT_FUNDS"
    | "INSUFFICIENT_PERMISSIONS"
    | "CARDHOLDER_INSUFFICIENT_PERMISSIONS"
    | "INVALID_LOCATION"
    | "TRANSACTION_LIMIT"
    | "VOICE_FAILURE"
    | "PAN_FAILURE"
    | "EXPIRATION_FAILURE"
    | "CARD_NOT_SUPPORTED"
    | "INVALID_PIN"
    | "MISSING_PIN"
    | "MISSING_ACCOUNT_TYPE"
    | "INVALID_POSTAL_CODE"
    | "INVALID_FEES"
    | "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED"
    | "PAYMENT_LIMIT_EXCEEDED"
    | "GIFT_CARD_AVAILABLE_AMOUNT"
    | "ACCOUNT_UNUSABLE"
    | "BUYER_REFUSED_PAYMENT"
    | "DELAYED_TRANSACTION_EXPIRED"
    | "DELAYED_TRANSACTION_CANCELED"
    | "DELAYED_TRANSACTION_CAPTURED"
    | "DELAYED_TRANSACTION_FAILED"
    | "CARD_TOKEN_EXPIRED"
    | "CARD_TOKEN_USED"
    | "AMOUNT_TOO_HIGH"
    | "UNSUPPORTED_INSTRUMENT_TYPE"
    | "REFUND_AMOUNT_INVALID"
    | "REFUND_ALREADY_PENDING"
    | "PAYMENT_NOT_REFUNDABLE"
    | "PAYMENT_NOT_REFUNDABLE_DUE_TO_DISPUTE"
    | "REFUND_DECLINED"
    | "INSUFFICIENT_PERMISSIONS_FOR_REFUND"
    | "INVALID_CARD_DATA"
    | "SOURCE_USED"
    | "SOURCE_EXPIRED"
    | "UNSUPPORTED_LOYALTY_REWARD_TIER"
    | "LOCATION_MISMATCH"
    | "IDEMPOTENCY_KEY_REUSED"
    | "UNEXPECTED_VALUE"
    | "SANDBOX_NOT_SUPPORTED"
    | "INVALID_EMAIL_ADDRESS"
    | "INVALID_PHONE_NUMBER"
    | "CHECKOUT_EXPIRED"
    | "BAD_CERTIFICATE"
    | "INVALID_SQUARE_VERSION_FORMAT"
    | "API_VERSION_INCOMPATIBLE"
    | "CARD_PRESENCE_REQUIRED"
    | "UNSUPPORTED_SOURCE_TYPE"
    | "CARD_MISMATCH"
    | "PLAID_ERROR"
    | "PLAID_ERROR_ITEM_LOGIN_REQUIRED"
    | "PLAID_ERROR_RATE_LIMIT"
    | "CARD_DECLINED"
    | "VERIFY_CVV_FAILURE"
    | "VERIFY_AVS_FAILURE"
    | "CARD_DECLINED_CALL_ISSUER"
    | "CARD_DECLINED_VERIFICATION_REQUIRED"
    | "BAD_EXPIRATION"
    | "CHIP_INSERTION_REQUIRED"
    | "ALLOWABLE_PIN_TRIES_EXCEEDED"
    | "RESERVATION_DECLINED"
    | "UNKNOWN_BODY_PARAMETER"
    | "NOT_FOUND"
    | "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND"
    | "METHOD_NOT_ALLOWED"
    | "NOT_ACCEPTABLE"
    | "REQUEST_TIMEOUT"
    | "CONFLICT"
    | "GONE"
    | "REQUEST_ENTITY_TOO_LARGE"
    | "UNSUPPORTED_MEDIA_TYPE"
    | "UNPROCESSABLE_ENTITY"
    | "RATE_LIMITED"
    | "NOT_IMPLEMENTED"
    | "BAD_GATEWAY"
    | "SERVICE_UNAVAILABLE"
    | "TEMPORARY_ERROR"
    | "GATEWAY_TIMEOUT";
export const ErrorCode = {
    InternalServerError: "INTERNAL_SERVER_ERROR",
    Unauthorized: "UNAUTHORIZED",
    AccessTokenExpired: "ACCESS_TOKEN_EXPIRED",
    AccessTokenRevoked: "ACCESS_TOKEN_REVOKED",
    ClientDisabled: "CLIENT_DISABLED",
    Forbidden: "FORBIDDEN",
    InsufficientScopes: "INSUFFICIENT_SCOPES",
    ApplicationDisabled: "APPLICATION_DISABLED",
    V1Application: "V1_APPLICATION",
    V1AccessToken: "V1_ACCESS_TOKEN",
    CardProcessingNotEnabled: "CARD_PROCESSING_NOT_ENABLED",
    MerchantSubscriptionNotFound: "MERCHANT_SUBSCRIPTION_NOT_FOUND",
    BadRequest: "BAD_REQUEST",
    MissingRequiredParameter: "MISSING_REQUIRED_PARAMETER",
    IncorrectType: "INCORRECT_TYPE",
    InvalidTime: "INVALID_TIME",
    InvalidTimeRange: "INVALID_TIME_RANGE",
    InvalidValue: "INVALID_VALUE",
    InvalidCursor: "INVALID_CURSOR",
    UnknownQueryParameter: "UNKNOWN_QUERY_PARAMETER",
    ConflictingParameters: "CONFLICTING_PARAMETERS",
    ExpectedJsonBody: "EXPECTED_JSON_BODY",
    InvalidSortOrder: "INVALID_SORT_ORDER",
    ValueRegexMismatch: "VALUE_REGEX_MISMATCH",
    ValueTooShort: "VALUE_TOO_SHORT",
    ValueTooLong: "VALUE_TOO_LONG",
    ValueTooLow: "VALUE_TOO_LOW",
    ValueTooHigh: "VALUE_TOO_HIGH",
    ValueEmpty: "VALUE_EMPTY",
    ArrayLengthTooLong: "ARRAY_LENGTH_TOO_LONG",
    ArrayLengthTooShort: "ARRAY_LENGTH_TOO_SHORT",
    ArrayEmpty: "ARRAY_EMPTY",
    ExpectedBoolean: "EXPECTED_BOOLEAN",
    ExpectedInteger: "EXPECTED_INTEGER",
    ExpectedFloat: "EXPECTED_FLOAT",
    ExpectedString: "EXPECTED_STRING",
    ExpectedObject: "EXPECTED_OBJECT",
    ExpectedArray: "EXPECTED_ARRAY",
    ExpectedMap: "EXPECTED_MAP",
    ExpectedBase64EncodedByteArray: "EXPECTED_BASE64_ENCODED_BYTE_ARRAY",
    InvalidArrayValue: "INVALID_ARRAY_VALUE",
    InvalidEnumValue: "INVALID_ENUM_VALUE",
    InvalidContentType: "INVALID_CONTENT_TYPE",
    InvalidFormValue: "INVALID_FORM_VALUE",
    CustomerNotFound: "CUSTOMER_NOT_FOUND",
    OneInstrumentExpected: "ONE_INSTRUMENT_EXPECTED",
    NoFieldsSet: "NO_FIELDS_SET",
    TooManyMapEntries: "TOO_MANY_MAP_ENTRIES",
    MapKeyLengthTooShort: "MAP_KEY_LENGTH_TOO_SHORT",
    MapKeyLengthTooLong: "MAP_KEY_LENGTH_TOO_LONG",
    CustomerMissingName: "CUSTOMER_MISSING_NAME",
    CustomerMissingEmail: "CUSTOMER_MISSING_EMAIL",
    InvalidPauseLength: "INVALID_PAUSE_LENGTH",
    InvalidDate: "INVALID_DATE",
    UnsupportedCountry: "UNSUPPORTED_COUNTRY",
    UnsupportedCurrency: "UNSUPPORTED_CURRENCY",
    AppleTtpPinToken: "APPLE_TTP_PIN_TOKEN",
    CardExpired: "CARD_EXPIRED",
    InvalidExpiration: "INVALID_EXPIRATION",
    InvalidExpirationYear: "INVALID_EXPIRATION_YEAR",
    InvalidExpirationDate: "INVALID_EXPIRATION_DATE",
    UnsupportedCardBrand: "UNSUPPORTED_CARD_BRAND",
    UnsupportedEntryMethod: "UNSUPPORTED_ENTRY_METHOD",
    InvalidEncryptedCard: "INVALID_ENCRYPTED_CARD",
    InvalidCard: "INVALID_CARD",
    PaymentAmountMismatch: "PAYMENT_AMOUNT_MISMATCH",
    GenericDecline: "GENERIC_DECLINE",
    CvvFailure: "CVV_FAILURE",
    AddressVerificationFailure: "ADDRESS_VERIFICATION_FAILURE",
    InvalidAccount: "INVALID_ACCOUNT",
    CurrencyMismatch: "CURRENCY_MISMATCH",
    InsufficientFunds: "INSUFFICIENT_FUNDS",
    InsufficientPermissions: "INSUFFICIENT_PERMISSIONS",
    CardholderInsufficientPermissions: "CARDHOLDER_INSUFFICIENT_PERMISSIONS",
    InvalidLocation: "INVALID_LOCATION",
    TransactionLimit: "TRANSACTION_LIMIT",
    VoiceFailure: "VOICE_FAILURE",
    PanFailure: "PAN_FAILURE",
    ExpirationFailure: "EXPIRATION_FAILURE",
    CardNotSupported: "CARD_NOT_SUPPORTED",
    InvalidPin: "INVALID_PIN",
    MissingPin: "MISSING_PIN",
    MissingAccountType: "MISSING_ACCOUNT_TYPE",
    InvalidPostalCode: "INVALID_POSTAL_CODE",
    InvalidFees: "INVALID_FEES",
    ManuallyEnteredPaymentNotSupported: "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED",
    PaymentLimitExceeded: "PAYMENT_LIMIT_EXCEEDED",
    GiftCardAvailableAmount: "GIFT_CARD_AVAILABLE_AMOUNT",
    AccountUnusable: "ACCOUNT_UNUSABLE",
    BuyerRefusedPayment: "BUYER_REFUSED_PAYMENT",
    DelayedTransactionExpired: "DELAYED_TRANSACTION_EXPIRED",
    DelayedTransactionCanceled: "DELAYED_TRANSACTION_CANCELED",
    DelayedTransactionCaptured: "DELAYED_TRANSACTION_CAPTURED",
    DelayedTransactionFailed: "DELAYED_TRANSACTION_FAILED",
    CardTokenExpired: "CARD_TOKEN_EXPIRED",
    CardTokenUsed: "CARD_TOKEN_USED",
    AmountTooHigh: "AMOUNT_TOO_HIGH",
    UnsupportedInstrumentType: "UNSUPPORTED_INSTRUMENT_TYPE",
    RefundAmountInvalid: "REFUND_AMOUNT_INVALID",
    RefundAlreadyPending: "REFUND_ALREADY_PENDING",
    PaymentNotRefundable: "PAYMENT_NOT_REFUNDABLE",
    PaymentNotRefundableDueToDispute: "PAYMENT_NOT_REFUNDABLE_DUE_TO_DISPUTE",
    RefundDeclined: "REFUND_DECLINED",
    InsufficientPermissionsForRefund: "INSUFFICIENT_PERMISSIONS_FOR_REFUND",
    InvalidCardData: "INVALID_CARD_DATA",
    SourceUsed: "SOURCE_USED",
    SourceExpired: "SOURCE_EXPIRED",
    UnsupportedLoyaltyRewardTier: "UNSUPPORTED_LOYALTY_REWARD_TIER",
    LocationMismatch: "LOCATION_MISMATCH",
    IdempotencyKeyReused: "IDEMPOTENCY_KEY_REUSED",
    UnexpectedValue: "UNEXPECTED_VALUE",
    SandboxNotSupported: "SANDBOX_NOT_SUPPORTED",
    InvalidEmailAddress: "INVALID_EMAIL_ADDRESS",
    InvalidPhoneNumber: "INVALID_PHONE_NUMBER",
    CheckoutExpired: "CHECKOUT_EXPIRED",
    BadCertificate: "BAD_CERTIFICATE",
    InvalidSquareVersionFormat: "INVALID_SQUARE_VERSION_FORMAT",
    ApiVersionIncompatible: "API_VERSION_INCOMPATIBLE",
    CardPresenceRequired: "CARD_PRESENCE_REQUIRED",
    UnsupportedSourceType: "UNSUPPORTED_SOURCE_TYPE",
    CardMismatch: "CARD_MISMATCH",
    PlaidError: "PLAID_ERROR",
    PlaidErrorItemLoginRequired: "PLAID_ERROR_ITEM_LOGIN_REQUIRED",
    PlaidErrorRateLimit: "PLAID_ERROR_RATE_LIMIT",
    CardDeclined: "CARD_DECLINED",
    VerifyCvvFailure: "VERIFY_CVV_FAILURE",
    VerifyAvsFailure: "VERIFY_AVS_FAILURE",
    CardDeclinedCallIssuer: "CARD_DECLINED_CALL_ISSUER",
    CardDeclinedVerificationRequired: "CARD_DECLINED_VERIFICATION_REQUIRED",
    BadExpiration: "BAD_EXPIRATION",
    ChipInsertionRequired: "CHIP_INSERTION_REQUIRED",
    AllowablePinTriesExceeded: "ALLOWABLE_PIN_TRIES_EXCEEDED",
    ReservationDeclined: "RESERVATION_DECLINED",
    UnknownBodyParameter: "UNKNOWN_BODY_PARAMETER",
    NotFound: "NOT_FOUND",
    ApplePaymentProcessingCertificateHashNotFound: "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND",
    MethodNotAllowed: "METHOD_NOT_ALLOWED",
    NotAcceptable: "NOT_ACCEPTABLE",
    RequestTimeout: "REQUEST_TIMEOUT",
    Conflict: "CONFLICT",
    Gone: "GONE",
    RequestEntityTooLarge: "REQUEST_ENTITY_TOO_LARGE",
    UnsupportedMediaType: "UNSUPPORTED_MEDIA_TYPE",
    UnprocessableEntity: "UNPROCESSABLE_ENTITY",
    RateLimited: "RATE_LIMITED",
    NotImplemented: "NOT_IMPLEMENTED",
    BadGateway: "BAD_GATEWAY",
    ServiceUnavailable: "SERVICE_UNAVAILABLE",
    TemporaryError: "TEMPORARY_ERROR",
    GatewayTimeout: "GATEWAY_TIMEOUT",
} as const;
