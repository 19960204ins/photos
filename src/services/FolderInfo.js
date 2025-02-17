/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { getCurrentUser } from '@nextcloud/auth'
import client from './DavClient'
import request from './DavRequest'
import { genFileInfo } from '../utils/fileUtils'

/**
 * List files from a folder and filter out unwanted mimes
 *
 * @param {String} path the path relative to the user root
 * @returns {Array} the file list
 */
export default async function(path) {
	// getDirectoryContents doesn't accept / for root
	const fixedPath = path === '/' ? '' : path

	const prefixPath = `/files/${getCurrentUser().uid}`

	// fetch listing
	const response = await client.stat(prefixPath + fixedPath, {
		data: request,
		details: true,
	})

	return genFileInfo(response.data)
}
