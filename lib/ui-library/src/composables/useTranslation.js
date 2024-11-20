// TODO: Its renamed to useLocalize, remove this once code base is migrated to useLocalize

import {
	t,
	localize,
	localizeSubmission,
	getMomentLocale,
} from '@/utils/i18n.js';
/** Check detailed documentation in @/utils/i18n.js */
export function useTranslation() {
	return {
		t,
		localize,
		localizeSubmission,
		getMomentLocale,
	};
}
