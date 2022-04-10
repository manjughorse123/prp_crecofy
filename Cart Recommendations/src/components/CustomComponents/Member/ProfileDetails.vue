<template>
    <div class="contant-box-main">
        <div class="contant-header">
            <h6><img src="../../../image/coolicon-icon.png" alt="">Profile details</h6>
            <div class="delete-status-box">
                <div class="status-box" data-toggle="buttons">
                    <label type="button" class="active-status">
                        <input type="radio" name="status_type" value="Active" checked="checked">
                        <span>Active</span>
                    </label>
                    <label type="button" class="inactive-status">
                        <input type="radio" name="status_type" value="Inactive">
                        <span>Inactive</span>
                    </label>
                </div>
                <button class="delete-profile">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.75 16.5H5.25C4.42157 16.5 3.75 15.8284 3.75 15V5.25H2.25V3.75H5.25V3C5.25 2.17157 5.92157 1.5 6.75 1.5H11.25C12.0784 1.5 12.75 2.17157 12.75 3V3.75H15.75V5.25H14.25V15C14.25 15.8284 13.5784 16.5 12.75 16.5ZM5.25 5.25V15H12.75V5.25H5.25ZM6.75 3V3.75H11.25V3H6.75Z"
                            fill="#EC4424" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="contant-details">
            <form class="profile-form">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label w-100">Name</label>
                            <input type="text" class="form-control" placeholder="Name" value="Bob Sinclare">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label w-100">Email</label>
                            <input type="email" class="form-control" placeholder="Email" value="bob.sinclare@gmail.com">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label w-100">Phone</label>
                            <input type="text" class="form-control" placeholder="Phone" value="+1-316-648-77-99">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-label w-100">Date of birth</label>
                            <input type="date" value="1983-05-16" class="form-control" placeholder="Date of birth">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-label w-100">Gender</label>
                            <select class="form-control">
                                <option value="Male" selected>Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-label w-100">Internal ID</label>
                            <input type="text" class="form-control" placeholder="Internal ID" value="6998">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-label w-100">External ID</label>
                            <input type="text" class="form-control" placeholder="External ID" value="97113">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-btns">
                            <button type="button" class="cancle-btn">Cancel</button>
                            <button type="submit" class="save-btn">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    export default defineComponent({
        name: 'ProfileDetails',
    })
</script>
<style>
   
</style>