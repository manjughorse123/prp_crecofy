<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6>
        <img
          src="./../../../public/assets/images/coolicon-icon.png"
          alt=""
        />Profile details
      </h6>
      <div class="delete-status-box">
        <div class="status-box">
          <!-- data-toggle="buttons" -->
          <label type="button" class="active-status m-0">
            <input
              :class="lable - active"
              type="radio"
              v-model="formData.is_active"
              value="true"
              :checked="formData.is_active == true ? true : false"
              @change="handleUpdate"
            />
            <span>Active</span>
          </label>
          <label type="button" class="inactive-status m-0">
            <input
              type="radio"
              v-model="formData.is_active"
              value="false"
              :checked="formData.is_active == false ? true : false"
              @change="handleUpdate"
            />
            <span>Inactive</span>  
          </label>
        </div>
        <button
          class="delete-profile"
          @click="deleteMember(JSON.parse(JSON.stringify(formData)))"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 16.5H5.25C4.42157 16.5 3.75 15.8284 3.75 15V5.25H2.25V3.75H5.25V3C5.25 2.17157 5.92157 1.5 6.75 1.5H11.25C12.0784 1.5 12.75 2.17157 12.75 3V3.75H15.75V5.25H14.25V15C14.25 15.8284 13.5784 16.5 12.75 16.5ZM5.25 5.25V15H12.75V5.25H5.25ZM6.75 3V3.75H11.25V3H6.75Z"
              fill="#EC4424"
            />
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
              <input
                type="text"
                v-model="formData.name"
                class="form-control"
                placeholder="Name"
              />
              <span class="error" v-show="error.name">Name is required</span>
              <span class="error" v-show="error.name_valid">Name must be at least 6 characters</span>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="form-label w-100">Email</label>
              <input
                type="email"
                v-model="formData.email"
                class="form-control"
                placeholder="Email"
              />
              <span class="error" v-show="error.email">Email is required</span>
              <span class="error" v-show="error.email_valid"
                >Email is not valid</span
              >
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="form-label w-100">Phone</label>
              <input
                type="text"
                v-model="formData.phone"
                class="form-control"
                placeholder="Phone"
              />
              <span class="error" v-show="error.phone">Phone is required</span>
              <span class="error" v-show="error.phone_valid"
                >Phone is not valid</span
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="form-label w-100">Date of birth</label>
              <input
                type="date"
                v-model="formData.birth_date"
                class="form-control"
                placeholder="Date of birth"
              />
              <span class="error" v-show="error.birth_date"
                >Date of birth is required</span
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="form-label w-100">Gender</label>
              <select class="form-control" v-model="formData.sex">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span class="error" v-show="error.sex">Gender is required</span>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="form-label w-100">Internal ID</label>
              <input
                type="text"
                v-model="formData.id"
                class="form-control"
                placeholder="Internal ID"
              />
              <span class="error" v-show="error.id"
                >Internal ID is required</span
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="form-label w-100">External ID</label>
              <input
                type="text"
                v-model="formData.external_id"
                class="form-control"
                placeholder="External ID"
              />
              <span class="error" v-show="error.external_id"
                >External ID is required</span>
                   <span class="error" v-show="error.external_id_valid"
                >External ID must be at least 6 characters</span>

            </div>
          </div>
          <div class="col-12">
            <div class="form-btns">
              <button type="button" class="cancle-btn">Cancel</button>
              <button
                type="submit"
                class="save-btn"
                @click.prevent="handleUpdate"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  MEMBER_DETAILS,
  UPDATE_MEMBER,
  DELETE_MEMBER,
} from "@/Core/store/action-types";
import { deleteItem } from "@/Core/helpers/gridUtils";
import { RESOURCE_NAME } from "../member.vars";
export default {
  name: "ProfileDetails",
  props: {
    profileDetails: {
      type: Object,
    },
  },
  data() {
    return {
      error: {
        name: false,
        email: false,
        phone: false,
        birth_date: false,
        sex: false,
        id: false,
        external_id: false,
        email_valid: false,
        phone_valid: false,
        name_valid: false,
        external_id_valid: false,
      },
      formData: {
        is_active: "",
        name: "",
        email: "",
        phone: "",
        birth_date: null,
        sex: "",
        id: "",
        external_id: "",
      },
    };
  },
  computed: {
    ...mapGetters("member", ["memberDetails"]),
  },
  methods: {
    ...mapActions("member", [MEMBER_DETAILS, UPDATE_MEMBER, DELETE_MEMBER]),
    InItMemberDetails() {
      if (this?.$route?.params?.memberId && this.$route.params.memberId != "") {
        const memberId = this.$route.params.memberId;
        this[MEMBER_DETAILS](memberId).then(() => {
          this.formData.is_active = this.memberDetails.is_active;
          this.formData.name = this.memberDetails.name;
          this.formData.email = this.memberDetails.email;
          this.formData.phone = this.memberDetails.phone;
          this.formData.birth_date = this.memberDetails.birth_date;
          this.formData.sex = this.memberDetails.sex;
          this.formData.id = this.memberDetails.id;
          this.formData.external_id = this.memberDetails.external_id;
          //this.memberDetail = this.memberDetails
          //this.memberDetail.birth_date =this.memberDetail.birth_date.split("/").reverse().join("-");
        });
        //this.memberDetail = this.memberDetails
      }
    },
    handleUpdate() {
      console.log("formdata=>", JSON.parse(JSON.stringify(this.formData)));
      console.log("memberDetails", this.memberDetails);
      //   if (!this.formData.phone) this.error.phone = true; else this.error.phone = false;
      if (!this.formData.birth_date) this.error.birth_date = true;
      else this.error.birth_date = false;
      if (!this.formData.sex) this.error.sex = true;
      else this.error.sex = false;
      if (!this.formData.id) this.error.id = true;
      else this.error.id = false;

      if (!this.formData.name) this.error.name = true;
      else if (this.formData.name.length <= 6) {
        this.error.name = false;
        this.error.name_valid = true;
      } else {
        this.error.name = false;
        this.error.name_valid = false;
      }
       if (!this.formData.external_id) this.error.external_id = true;
      else if (this.formData.external_id.length < 6) {
        this.error.external_id = false;
        this.error.external_id_valid = true;
      } else {
        this.error.external_id = false;
        this.error.external_id_valid = false;
      }
      if (!this.formData.email) {
        this.error.email = true;
      } else if (!this.validEmail(this.formData.email)) {
        this.error.email = false;
        this.error.email_valid = true;
      } else {
        this.error.email = false;
        this.error.email_valid = false;
      }

      if (!this.formData.phone) {
        this.error.phone = true;
      } else if (!this.validPhone(this.formData.phone)) {
        this.error.phone = false;
        this.error.phone_valid = true;
      } else {
        this.error.phone = false;
        this.error.phone_valid = false;
      }

      if (
        !this.error.email &&
        !this.error.name &&
        !this.error.name_valid &&
        !this.error.phone &&
        !this.error.birth_date &&
        !this.error.sex &&
        !this.error.id &&
        !this.error.external_id &&
        !this.error.external_id_valid &&
        !this.error.email_valid &&
        !this.error.phone_valid
      ) {
        this[UPDATE_MEMBER](JSON.parse(JSON.stringify(this.formData)))
          .then(() => {
            this.$alertify.notify(
              `Profile updated successfully. `,
              "success",
              3
            );
            this.InItMemberDetails();
          })
          .catch((e) => {
            console.log("error", e);
          });
      }
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone(phone) {
      var re = /^\d{10}$/;
      return re.test(phone);
    },
    deleteMember(item) {
      console.log(item);
      deleteItem(
        this.$alertify,
        this.$ability,
        this[DELETE_MEMBER],
        RESOURCE_NAME,
        item
      );
    },
  },
  watch: {
    memberDetails() {
      console.log("this.memberDetails ", this.memberDetails.id);
    },
  },
  mounted() {
    this.InItMemberDetails();
  },
};
</script>
<style>
</style>