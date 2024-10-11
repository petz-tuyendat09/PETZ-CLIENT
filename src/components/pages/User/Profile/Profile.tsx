import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
    return (
        <>
            <div className="flex min-h-screen mt-36">
                {/* <!-- Sidebar --> */}
                <div className="w-1/4 bg-white p-6">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white" style={{ background: '#777777' }}>P</div>
                        <div className="ml-4">
                            <div className="text-lg font-semibold">Phuc Thien</div>
                            <div className="text-sm text-gray-500">Member</div>
                        </div>

                    </div>
                    <nav>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 bg-blue-100 text-blue-600">
                                    <i className="fas fa-user mr-2"></i> Thông tin tài khoản
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-list mr-2"></i> Danh sách sản phẩm đã đăng
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-concierge-bell mr-2"></i> Danh sách dịch vụ đã đặt
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-chart-line mr-2"></i> Thống kê doanh thu
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-history mr-2"></i> Lịch sử đơn hàng
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-key mr-2"></i> Thay đổi mật khẩu
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-sign-out-alt mr-2"></i> Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* <!-- Main Content --> */}
                <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-semibold mb-6">Thông tin tài khoản</h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white" style={{ background: '#777777' }}>P</div>
                            <div className="ml-4">
                                <div className="text-lg font-semibold">Phuc Thien</div>
                                <div className="text-sm text-gray-500">nguyenphucthien0408@gmail.com</div>
                            </div>
                        </div>
                        <form>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700">Họ và tên</label>
                                    <input type="text" className="w-full mt-2 p-2 border border-slate-500 rounded-lg" value="Nguyen Phuc Thien" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Giới tính</label>
                                    <select className="w-full mt-2 p-2 border border-slate-500 rounded-lg">
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Ngày sinh</label>
                                    <input type="text" className="w-full mt-2 p-2 border border-slate-500 rounded-lg" value="04/08/2004" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <input type="email" className="w-full mt-2 p-2 border border-slate-500 rounded-lg" value="nguyenphucthien0408@gmail.com" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Số điện thoại</label>
                                    <input type="text" className="w-full mt-2 p-2 border border-slate-500 rounded-lg" value="0908809905" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Quận/huyện</label>
                                    <select className="w-full mt-2 p-2 border border-slate-500 rounded-lg">
                                        <option>An Phú</option>
                                        <option>Quận 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Tỉnh/thành phố</label>
                                    <select className="w-full mt-2 p-2 border border-slate-500 rounded-lg">
                                        <option>An Giang</option>
                                        <option>Hà Nội</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Địa chỉ</label>
                                    <input type="text" className="w-full mt-2 p-2 border border-slate-500 rounded-lg" value="940 Lò Gốm" />
                                </div>
                            </div>
                        </form>

                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="w-1/2 bg-black text-white p-3 mt-12 rounded-full">Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </>
    )
}